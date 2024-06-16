import React from 'react'
import { BiSolidCameraMovie } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className='w-full h-[70px] flex gap-2 font-bold text-3xl p-5 items-center'>
            <BiSolidCameraMovie className='text-[#1C75BC]' />
            <h1 className='text-[#E23636]'>Cine<span className='text-[#1C75BC]'>Bot</span></h1>
        </nav>
    )
}

export default Navbar