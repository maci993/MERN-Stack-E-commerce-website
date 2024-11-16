import React from 'react'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
  <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full pb-12'>
    <div className='max_padd_container relative top-32 xs:top-52'>
    <h1 className='h1 capitalize max-w-[37rem]'>Digital Shopping Hub Junction</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  <div className='flexStart items-center gap-x-4 my-10'>
    <div className='regular-24 flexCenter gap-x-3'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
    </div>
    <div className='bold-16 sm:bold-20'>176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span></div>
  </div>
  <div className='max-xs:flex-col flex gap-2'>
    <NavLink to={""} className={"btn_dark_rounded flexCenter"}>Shop now</NavLink>
    <NavLink to={""} className={"btn_dark_rounded flexCenter gap-x-2"}><MdOutlineLocalOffer className='text-2xl'/>Offers</NavLink>
  </div>
  </div>
  </section>
  )
}

export default Hero