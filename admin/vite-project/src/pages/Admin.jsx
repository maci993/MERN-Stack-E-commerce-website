import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from "react-router-dom";
import AddProduct from '../components/AddProduct';
import ListProduct from '../components/ListProduct';

export const Admin = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
              <Route path="/addproduct" element={<AddProduct />}/>
              <Route path="/listproduct" element={<ListProduct />}/>
              <Route path="/" element={<AddProduct />}/>
          </Routes>
        </div>
    </div>
  )
}
