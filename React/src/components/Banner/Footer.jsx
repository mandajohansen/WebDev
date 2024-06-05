import React from 'react';
import { aboutImg } from '../../assets/index';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import {Link} from "react-scroll";

const Footer = () => {
  return (
    <div>
    <div className='w-full pt-52 pb-36 h-auto border-t-[1px] text-title border-t-detail grid grid-cols-4 gap-20 border-b-[1px] border-b-detail'>
      <div className='w-full h-full flex flex-col'>
        <div className='relative w-full h-full bg-gradient-to-r from-title via-hover to-detail rounded-full'>
        <img src={aboutImg} alt="aboutImg" className='w-full h-full object-cover' />
        </div>
        <div className="flex gap-5 pt-4">
          <span className="aboutIcons">
            <a href="https://www.linkedin.com/in/amandaljohansen" target="_blank" rel="noreferrer">
            <FaLinkedin />
            </a>
          </span>
          <span className="aboutIcons">
            <a href="https://www.instagram.com/mandajohansen" target="_blank" rel="noreferrer">
            <FaInstagram />
            </a>
          </span>
          <span className="aboutIcons">
            <FaTwitter />
          </span>
          <span className="aboutIcons">
            <FaFacebook />
          </span>
        </div>
      </div>
      <div className='w-full h-full '>
        <h3 className="text-2xl font-bold uppercase text-title tracking-wide">Quick Link</h3>
        <ul className='flex flex-col gap-2 font-semibold overflow-hidden py-6'>
          <li >
          <Link to="home" smooth duration={500} activeClass="active"spy={true}>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Home
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
            </Link>
          </li>
          <li>
          <Link to="about" smooth duration={500} activeClass="active"spy={true}>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              About
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
            </Link>
          </li>
          <li>
          <Link to="skills" smooth duration={500} activeClass="active"spy={true}>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Skills
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
            </Link>
          </li>
          <li>
          <Link to="projects" smooth duration={500} activeClass="active"spy={true}>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Projects
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
            </Link>
          </li>
          <li>
          <Link to="contact" smooth duration={500} activeClass="active"spy={true}>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Contact
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-full h-full '>
        <h3 className="text-2xl font-bold uppercase text-title tracking-wide">Resources</h3>
        <ul className='flex flex-col gap-2 font-semibold overflow-hidden py-6'>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Authentication
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              System Status
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Terms of Service
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Pricing
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Over right
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
        </ul>
      </div>
      <div className='w-full h-full '>
        <h3 className="text-2xl font-bold uppercase text-title tracking-wide">Developers</h3>
        <ul className='flex flex-col gap-2 font-semibold overflow-hidden py-6'>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Dokumentation
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              API Dokumentation
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Support Center
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              FAQ's
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
          <li>
            <span className='w-full text-lg hover:text-hover duration-300 relative cursor-pointer group'>
              Open Source Projects
              <span className='absolute h-[1px] w-full inline-flex bg-detail -bottom-1 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className='text-center justify-center flex flex-col text-title font-semibold py-10'>
    <h1>Made by <span className="text-hover">Amanda and Mathilde</span></h1>
    <h2 className='text-detail'>© 2024 All rights reserved</h2>
</div>

    </div>
  );
}

export default Footer;
