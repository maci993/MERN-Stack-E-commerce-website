# E-Commerce MERN Stack Application

A complete e-commerce solution built with MongoDB, Express.js, React, and Node.js.

## Features

### Frontend (Customer Portal)
- 🏠 Home page with hero section
- 🛍️ Product catalog with categories (Men's, Women's, Kids)
- 🔍 Product search and filtering
- 🛒 Shopping cart functionality
- 👤 User authentication (Login/Signup)
- 📱 Responsive design
- 💳 Checkout process

### Admin Panel
- ➕ Add new products
- 📋 View all products
- 🗑️ Delete products
- 📊 Product management dashboard

### Backend API
- 🔐 JWT authentication
- 📁 File upload for product images
- 🗄️ MongoDB database integration
- 🛒 Cart management
- 👥 User management

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-mern
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install Admin Panel Dependencies**
   ```bash
   cd ../admin/vite-project
   npm install
   ```

### Running the Application

1. **Start MongoDB**
   Make sure MongoDB is running on your system.

2. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:4000`

3. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

4. **Start the Admin Panel**
   ```bash
   cd admin/vite-project
   npm run dev
   ```
   The admin panel will run on `http://localhost:5174`

## API Endpoints

### Authentication
- `POST /signup` - User registration
- `POST /login` - User login

### Products
- `GET /allproducts` - Get all products
- `POST /addproduct` - Add new product (Admin)
- `POST /removeproduct` - Remove product (Admin)
- `POST /upload` - Upload product image

### Cart
- `POST /addtocart` - Add item to cart
- `POST /removefromcart` - Remove item from cart
- `POST /getcart` - Get user's cart

## Project Structure

```
├── backend/
│   ├── index.js          # Main server file
│   ├── upload/images/    # Uploaded product images
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── Context/      # React context
│   │   └── assets/       # Static assets
│   └── package.json
└── admin/vite-project/
    ├── src/
    │   ├── components/   # Admin components
    │   └── pages/        # Admin pages
    └── package.json
```

## Features in Detail

### Customer Features
- Browse products by category
- View product details
- Add/remove items from cart
- User registration and login
- Responsive design for mobile and desktop

### Admin Features
- Product management (CRUD operations)
- Image upload for products
- Product listing with search and filter
- Responsive admin dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.