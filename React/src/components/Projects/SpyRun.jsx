import React from "react";
import Navbar from "../Navbar";
import { aboutImg } from "../../assets/index";
import { spyRun } from "../../assets/index";

const SpyRun = () => {
    return (
        <div>
    <div className='w-full h-auto px-4'>
         <Navbar />
        <div className='max-w-screen-2xl mx-auto px-16'>
        </div>
    </div>
            <section id="spyrun" className="w-full pt-8 pb-20 border-b-[1px] border-b-detail flex">
                <div className="w-1/2 flex flex-col pl-10 relative">
                    <div className="flex items-center">
                        <h3 className="text-5xl uppercase font-semibold text-title tracking-wide">Semester Project</h3>
                        <div className="flex gap-4 items-center ml-4"></div>
                    </div>
                    <h2 className="text-2xl pt-2 font-semibold font-style: italic text-hover tracking-wide">SpyRun</h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide pt-5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industrys standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.
                    </p>
                </div>

                {/* Billedet */}
                <div className="w-1/2 flex justify-center items-center">
                    <div></div>
                    <img className="w-[500px] h-[400px] z-10 object-cover rounded-lg"
                        src={spyRun}
                        alt="spyRun"
                    />
                </div>
            </section>
        </div>
    );
}

export default SpyRun;
