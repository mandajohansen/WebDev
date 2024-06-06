import React, {useState} from "react";
import {Link} from "react-scroll";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
   
    return (
        <div className='flex sticky top-0 z-50 bg-background-color justify-between items-center font-titleFont border-b-[1px] border-b-detail'>
            <h1 className='w-full text-3xl font-bold text-title '>
                <a href="/"> Portfolio</a></h1>
            <ul className='flex text-title'>
                <li className='p-4 hover:text-hover cursor-pointer'><HashLink smooth to="/#home">Home</HashLink></li>
                <li className='p-4 hover:text-hover cursor-pointer'><HashLink smooth to="/#about">About</HashLink></li>
                <li className='p-4 hover:text-hover cursor-pointer'><HashLink smooth to="/#projects">Project</HashLink></li>
                <li className='p-4 hover:text-hover cursor-pointer'><HashLink smooth to="/#skills">Skills</HashLink></li>
                <li className='p-4 hover:text-hover cursor-pointer'><HashLink smooth to="/#contact">Contact</HashLink></li>
            </ul>
        </div>
    )
}

export default Navbar
