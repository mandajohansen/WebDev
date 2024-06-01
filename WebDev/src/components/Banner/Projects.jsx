import React from "react";
import {spyRun} from "../../assets/index";
import {aboutImg} from "../../assets/index";

const Projects = () => {
    return (
        <section id="projects" className="w-full h-[809px] flex pb-20 py-20 sfont-titleFont border-b-[1px] border-b-detail relative">
            <div className="w-full flex flex-col relative">
                <div className="flex items-center">
                    <h3 className="text-5xl uppercase font-semibold text-title tracking-wide">Projects</h3>
                </div>
                <p className="text-base font-bodyFont leading-6 tracking-wide pt-5 pb-14">
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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div 
                style={{backgroundImage: `url(${spyRun})`}} 
                className="shadown-lg shadow-detail group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-black tracking-wider"> 
                            SpyRun
                        </span>
                        <div className="pt-8 text-center"> 
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                                    See more
                                </button>
                            </a>
                       </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${aboutImg})`}} 
                className="shadown-lg shadow-detail group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-black tracking-wider"> 
                            Amandas fonologiske barn
                        </span>
                        <div className="pt-8 text-center"> 
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                                    See more
                                </button>
                            </a>
                       </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${spyRun})`}} 
                className="shadown-lg shadow-detail group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-black tracking-wider"> 
                            SpyRun 2
                        </span>
                        <div className="pt-8 text-center"> 
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                                    See more
                                </button>
                            </a>
                       </div>
                    </div>
                </div>
                </div>
                </div>
        </section>
    );
};

export default Projects