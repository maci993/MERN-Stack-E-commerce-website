import React, { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch("http://localhost:4000/allproducts");
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
      }
      const data = await res.json();
      setAllproducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      alert("Failed to fetch products. Please try again later.");
    }
  };

  const handleRemove = async (id) => {
    try {
      const res = await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) {
        throw new Error(`Failed to remove product: ${res.statusText}`);
      }
      const data = await res.json();
      if (data.success) {
        setAllproducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
        alert("Product removed successfully.");
      } else {
        alert("Failed to remove product.");
      }
    } catch (error) {
      console.error("Error removing product:", error);
      alert("Failed to remove product. Please try again later.");
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7">
      <h4 className="bold-22 p-5 uppercase">Product List</h4>
      <div className="max-h-[77vh] overflow-auto px-4 text-center">
        <table className="w-full mx-auto">
          <thead>
            <tr className="bg-white bold-14 sm:regular-22 text-start py-12">
              <th className="p-2">Products</th>
              <th className="p-2">Title</th>
              <th className="p-2">Old Price</th>
              <th className="p-2">Category</th>
              <th className="p-2">Remove</th>
            </tr>
          </thead>
          <tbody>
            {allproducts.length > 0 ? (
              allproducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-slate-900/20 text-gray-20 p-6 medium-14"
                >
                  <td className="flex justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      height={43}
                      width={43}
                      className="rounded-lg ring-1 ring-slate-900/5 my-1"
                    />
                  </td>
                  <td>
                    <div className="line-clamp-3">{product.name}</div>
                  </td>
                  <td>${product.old_price}</td>
                  <td>${product.new_price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => handleRemove(product.id)}>
                      <div className="text-red-500 hover:text-red-700">
                        <TbTrash />
                      </div>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No products available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
