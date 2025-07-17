const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));


mongoose.connect(
  "mongodb+srv://savicmarina993:user123@cluster0.vundx.mongodb.net/Ecommerce-mern?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  res.send("Express App is running");
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  console.log(req.file);
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const Product = mongoose.model("Product", {
  id: {
      type: Number,
      required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});


app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if(products.length>0)
    {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id+1;
    }
    else{
      id=1;
    }
    const product = new Product({
      id:id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });
    await product.save();
    console.log("Product saved:", product);
    res.json({ success: true, product });
  } catch (error) {
    console.error("Error saving product:", error);
    res.status(500).json({ success: false, message: "Failed to save product" });
  }
});

app.get("/allproducts", async (req, res) => {
  try {
    let products = await Product.find({});
    console.log("All products fetched");
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.post("/removeproduct", async (req, res) => {
  try {
    const { id } = req.body;
    const product = await Product.findOneAndDelete({id:id});
    if (product) {
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    console.error("Error removing product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to remove product" });
  }
});

const User = mongoose.model("User", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

app.post("/signup", async(req, res) => {
    let check = await User.findOne({email: req.body.email});
    if(check){
        return res.status(400).json({success: false, errors: "Excisting user found with same email address"});
    }
    let cart = {};
    for(let i = 0; i < 300; i++){
        cart[i] = 0;
    }
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password:req.body.password,
        cartData: cart,
    });
    await user.save();

    const data = {
        user: {
            id: user.id
        }
    };
    const token = jwt.sign(data, "secret_ecom");
    res.json({success: true, token});
});

app.post("/login", async (req, res) => {
    let user = await User.findOne({email:req.body.email});
    if(user) {
        const passMatch = req.body.password === user.password;
        if(passMatch){
            const data = {
                user: {
                    id: user.id
                }
            };
            const token = jwt.sign(data, "secret_ecom");
            res.json({success:true, token});
        } else {
            res.json({success:false, errors:"Wrong Password"});
        }
    } else {
        res.json({success:false, errors:"Wrong Email address"});
    }
});

const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).json({errors:"Please authenticate using valid token"});
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).json({errors:"please authenticate using a valid token"});
        }
    }
};

app.post('/addtocart', fetchUser, async (req, res) => {
    console.log("Added", req.body.itemId);
    let userData = await User.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added");
});

app.post('/removefromcart', fetchUser, async (req, res) => {
    console.log("removed", req.body.itemId);
    let userData = await User.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await User.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed");
});

app.post('/getcart', fetchUser, async (req, res) => {
    console.log("GetCart");
    let userData = await User.findOne({_id:req.user.id});
    res.json(userData.cartData);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port" + port);
  } else {
    console.log("Error:" + error);
  }
});
