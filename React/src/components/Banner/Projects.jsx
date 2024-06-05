import React from "react";
import { spyRun, pandasLege, ghost} from "../../assets/index";
import { TfiFolder } from "react-icons/tfi";


const Projects = () => {
    return (
        <section id="projects" className="w-full h-[650px] flex pb-20 py-20 sfont-titleFont border-b-[1px] border-b-detail relative">
            <div className="w-full flex flex-col relative">
                <div className="flex items-center gap-4">
                    <h3 className="text-5xl uppercase font-semibold text-title tracking-wide">Projects</h3>
                    <TfiFolder className="text-5xl text-hover" />
                </div>
                <p className="text-base font-bodyFont leading-6 tracking-wide pt-5 pb-14">
                Through my study  there is heavy emphasis on creating project with a 
                purpose and to get hands on experiences with the things that you 
                learn throughout the education. With this structure we create a 
                project each semester, which includes research on a topic, designing 
                a digital solution, testing the product and evaluating it impact 
                and intended purpose. Here I have three projects, that I have created:
                <li>SpyRun</li>
                <li>Pandas Fonologiske Lege</li>
                <li>Digital Study Card</li>
                

                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div 
                    style={{backgroundImage: `url(${spyRun})`}} 
                    className="shadow-lg shadow-detail group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-5xl font-bold text-background-color tracking-wider"> 
                                SpyRun
                            </span>
                            <div className="pt-8 text-center"> 
                                <a href="/SpyRun">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg seeMore">
                                        See more
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div 
                    style={{backgroundImage: `url(${pandasLege})`}} 
                    className="shadow-lg shadow-detail group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-4xl font-bold text-background-color tracking-wider"> 
                                Pandas <br></br>Fonologiske Lege
                            </span>
                            <div className="pt-8 text-center"> 
                                <a href="/Pandas">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg seeMore">
                                        See more
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div 
                    style={{backgroundImage: `url(${ghost})`}} 
                    className="shadow-lg shadow-detail group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-4xl font-bold text-background-color tracking-wider"> 
                                Digital <br></br>Study Card
                            </span>
                            <div className="pt-8 text-center"> 
                                <a href="/Other">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 font-bold text-lg seeMore">
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

export default Projects;
