import React from 'react'
import { Link } from 'react-router-dom'
import addProduct from "../assets/addproduct.png"
import listProduct from "../assets/listproduct.png"

const Sidebar = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center w-full bg-slate-100 px-4 py-3 shadow-md gap-4'>
  <Link to={"/addproduct"}>
    <button className='flex items-center gap-2 rounded-md bg-slate-200 h-10 px-4 medium-14 hover:bg-slate-300'>
      <img src={addProduct} alt="Add Product Icon" height={35} width={35} />
      <span className="text-black">Add Product</span>
    </button>
  </Link>
  <Link to={"/listproduct"}>
    <button className='flex items-center gap-2 rounded-md bg-slate-200 h-10 px-4 medium-14 hover:bg-slate-300'>
      <img src={listProduct} alt="List Product Icon" height={35} width={35} />
      <span className="text-black">Product List</span>
    </button>
  </Link>
</div>
  )
}

export default Sidebar