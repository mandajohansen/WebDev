import React from "react";
import NavbarProjects from "../NavbarProjects"
import { spyRun } from "../../assets/index";

const Pandas = () => {
    return (
        <div>
        <div className='w-full h-auto px-4'>
            <NavbarProjects />
        </div>
        <section id="pandas" className="w-full pt-16 pb-20 border-b-[1px] border-b-detail flex">
            <div className="w-1/2 flex flex-col pl-10 relative">
                <div className="flex items-center">
                    <h3 className="text-5xl uppercase font-semibold text-title tracking-wide">Semester Project</h3>
                    <div className="flex gap-4 items-center ml-4"></div>
                </div>
                <h2 className="text-2xl pt-2 font-semibold italic text-hover tracking-wide">SpyRun</h2>
                <p className="text-base leading-6 tracking-wide pt-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
                <p className="text-base leading-6 tracking-wide pt-5">
                    Our team faced numerous challenges during the development process,
                    including ensuring data privacy and security, optimizing performance,
                    and creating an intuitive user interface. Through rigorous testing
                    and continuous improvement, we have created a robust solution that
                    meets the highest industry standards.
                </p>
            </div>
            
            <div className="w-1/2 flex justify-center items-center relative">
                <div className="absolute left-24 top-8 w-[83%] h-[495px] bg-gradient-to-r from-title via-hover to-detail flex"></div>
                <img className="w-[600px] h-[500px] z-10 object-cover"
                    src={spyRun}
                    alt="SpyRun"
                />
            </div>
        </section>
        {/* Additional Sections */}
        <section className="w-full py-20 flex justify-between ">
            <div className="w-1/2 flex flex-col items-center px-8">
                <h3 className="text-3xl uppercase font-semibold text-title tracking-wide mb-8">Features</h3>
                <ul className="text-base font-bodyFont leading-6 tracking-wide max-w-screen-md list-disc list-inside">
                    <li>Real-time data collection and analysis</li>
                    <li>Advanced encryption for data security</li>
                    <li>Intuitive user interface for easy navigation</li>
                    <li>Customizable reporting and alerts</li>
                    <li>Integration with existing systems and platforms</li>
                </ul>
            </div>
            {/* Team Section */}
            <div className="w-1/2 flex flex-col items-center px-8">
                <h3 className="text-3xl uppercase font-semibold text-title tracking-wide mb-8">Team</h3>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    Our team consists of experts in the fields of cybersecurity,
                    software development, and data science. With years of experience and
                    a passion for innovation, we are dedicated to delivering top-notch
                    solutions to our clients.
                </p>
            </div>
        </section>
        <section className="py-15 gap-4 w-full pt-8 pb-32 border-b-[1px] border-b-detail flex">
            <div className="w-1/3 flex flex-col items-center text-center relative">
                <div className="absolute left-6 top-2 w-[80%] h-[380px] bg-gradient-to-l from-title via-hover to-detail flex rounded-full"></div>
                <div className="w-[80%] relative">
                    <img src={spyRun} alt="SpyRun" className="w-full h-[380px] object-cover rounded-full" />
                </div>
            </div>
            <div className="w-2/3">
                <p className="text-base font-bodyFont leading-6 tracking-wide pt-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
            </div>
        </section>
        <footer className="text-center justify-center flex flex-col text-title font-semibold py-10">
            <h1>Made by <span className="text-hover">Amanda and Mathilde</span></h1>
            <h2 className='text-detail'>© 2024 All rights reserved</h2>
        </footer>
    </div >
);
};
export default Pandas;
