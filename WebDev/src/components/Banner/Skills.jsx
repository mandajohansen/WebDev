import React, { useState } from "react";
import { Experience } from "./Experience";
import { AllSkills } from "./AllSkills";

const Skills = () => {
    const [experienceData, setExperienceData] = useState(true);
    const [skillsData, setSkillsData] = useState(false);

    return (
        <section id="skills" className="w-full h-[809px] pb-20 border-b-[1px] border-b-detail">
            <div className="flex justify-center items-center text-center">
                <h3 className="text-5xl pb-5 uppercase font-semibold text-title tracking-wide">Skills</h3>
            </div>
            <div>
                <ul className="w-full grid grid-cols-2 text-center">
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

export default Skills;

