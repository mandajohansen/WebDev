import React, {useState} from "react";
import {Link} from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = {} 
    return (
        <div className='flex sticky top-0 z-50 bg-background-color justify-between items-center font-titleFont border-b-[1px] border-b-detail'>
            <h1 className='w-full text-3xl font-bold text-title '>
                <a href="/"> Portfolio</a></h1>
            <ul className='flex text-title'>
                <li className='p-4 hover:text-hover cursor-pointer'><Link to="home" smooth duration={500} activeClass="active"spy={true}>Home</Link></li>
                <li className='p-4 hover:text-hover cursor-pointer'><Link to="about" smooth duration={500} activeClass="active"spy={true}>About</Link></li>
                <li className='p-4 hover:text-hover cursor-pointer'><Link to="projects" smooth duration={500} activeClass="active"spy={true}>Project</Link></li>
                <li className='p-4 hover:text-hover cursor-pointer'><Link to="skills" smooth duration={500} activeClass="active"spy={true}>Skills</Link></li>
                <li className='p-4 hover:text-hover cursor-pointer'><Link to="contact" smooth duration={500} activeClass="active" spy={true}>Contact</Link></li>
            </ul>
        </div>
    )
}
    
export default Navbar
