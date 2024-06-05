import React, { useState } from "react";
import { Experience } from "./Experience";
import { AllSkills } from "./AllSkills";
import { TfiMedall } from "react-icons/tfi";



const Resume = () => {
    const [experienceData, setExperienceData] = useState(true);
    const [skillsData, setSkillsData] = useState(false);

    return (
        <section id="resume" className="w-full pt-20 pb-20 border-b-[1px] border-b-detail">
            <div className="flex justify-center items-center text-center pb-16 gap-2 ">
                <h3 className="text-5xl uppercase font-semibold text-title tracking-wide">Resume</h3>
                <TfiMedall className="text-5xl text-hover" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-2 text-center items-center gap-4">
                    <li
                        onClick={() => {
                            setExperienceData(true);
                            setSkillsData(false);
                        }}
                        className={`skillsIcons ${experienceData ? "border-title border-2 bg-opasity-90" : "border-none opacity-80"}`}
                    >
                        Education and Experience
                    </li>
                    <li
                        onClick={() => {
                            setExperienceData(false);
                            setSkillsData(true);
                        }}
                        className={`skillsIcons ${skillsData ? "border-title border-2 bg-opacity-90" : "border-none opacity-80"}`}
                    >
                        Skills
                    </li>
                </ul>
            </div>
            {experienceData && <Experience />}
            {skillsData && <AllSkills />}
        </section>
    );
};

export default Resume;

