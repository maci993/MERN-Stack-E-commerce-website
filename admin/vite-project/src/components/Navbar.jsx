import React from 'react'
import logo from "../assets/logo.jpg"
import profileImg from "../assets/profile.png"

const Navbar = () => {
  return (
<nav className='w-full flex justify-between items-center bg-white py-2 ring-1 ring-slate-900/5'>
  <div className='w-12 h-12'>
    <img src={logo} alt="Logo" />
  </div>
  <div className='uppercase font-bold text-lg bg-secondary px-3 rounded-md tracking-widest max-xs:text-base max-xs:py-2 max-xs:px-1'>
    Admin Panel
  </div>
  <div>
    <img src={profileImg} alt="Profile" className='h-12 w-12 rounded-full' />
  </div>
</nav>
  )
}

export default Navbar