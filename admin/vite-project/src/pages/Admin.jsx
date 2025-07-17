import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from "react-router-dom";
import AddProduct from '../components/AddProduct';
import ListProduct from '../components/ListProduct';

export const Admin = () => {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
            <Route path="/addproduct" element={<AddProduct />}/>
            <Route path="/listproduct" element={<ListProduct />}/>
        </Routes>
    </div>
  )
}
