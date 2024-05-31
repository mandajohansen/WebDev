import React, {useState} from "react";
import {Link} from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = {} 
    return (
        <div className='flex justify-between items-center'>
            <h1 className='w-full text-3xl font-bold text-title '>Portfolio</h1>
            <ul className='flex text-[#204734]'>
                <li className='p-4 hover:text-hover cursor-pointer'>Home</li>
                <li className='p-4 hover:text-hover cursor-pointer'><Link to="about" smooth duration={500}>About</Link></li>
                <li className='p-4 hover:text-hover cursor-pointer'><Link to="projects" smooth duration={500}>Project</Link></li>
                <li className='p-4 hover:text-hover cursor-pointer'><Link to="skills" smooth duration={500}>Skills</Link></li>
                <li className='p-4 hover:text-hover cursor-pointer'><Link to="contact" smooth duration={500}>Contact</Link></li>
            </ul>
        </div>
    )
}
    
export default Navbar
