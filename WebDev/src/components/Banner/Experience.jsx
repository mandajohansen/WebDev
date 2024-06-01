import React from 'react'
import { SkillInfo } from './SkillInfo'
import {motion} from 'framer-motion'

export const Experience = () => {
  return (
    
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="w-full flex gap-20 mt-12">
    <div className="w-1/2">
        <div className="py-12">
            <p className="text-sm font-semibold text-title tracking-[4px]">2014-Now</p>
            <h2 className="text-4xl font-bold">Education History</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-hover text-title flex flex-col gap-10">
            <SkillInfo 
                title="Bachelor of Science in Computer Science"
                subtitle="University of the Philippines Los Baños"
                description="I graduated with a degree in Computer Science from the University of the Philippines Los Baños. I learned the basics of programming, software engineering, and computer systems. I also learned how to analyze and solve problems using algorithms and data structures."
                result="Graduated with a GPA of 1.75"
            />
            <SkillInfo 
                title="Bachelor of Science in Computer Science"
                subtitle="University of the Philippines Los Baños"
                description="I graduated with a degree in Computer Science from the University of the Philippines Los Baños. I learned the basics of programming, software engineering, and computer systems. I also learned how to analyze and solve problems using algorithms and data structures."
                result="Graduated with a GPA of 1.75"
            />
            <SkillInfo 
                title="Bachelor of Science in Computer Science"
                subtitle="University of the Philippines Los Baños"
                description="I graduated with a degree in Computer Science from the University of the Philippines Los Baños. I learned the basics of programming, software engineering, and computer systems. I also learned how to analyze and solve problems using algorithms and data structures."
                result="Graduated with a GPA of 1.75"
            />
        </div>
    </div>
    <div className="w-1/2">
        <div className="py-12">
            <p className="text-sm font-semibold text-title tracking-[4px]">2014-Now</p>
            <h2 className="text-4xl font-bold">Job History</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-hover text-title flex flex-col gap-10">
            <SkillInfo 
                title="Software Developer"
                subtitle="Tech Company"
                description="Worked as a software developer at a tech company where I was responsible for developing and maintaining web applications."
                result="Promoted to Senior Developer"
            />
            <SkillInfo 
                title="Software Developer"
                subtitle="Tech Company"
                description="Worked as a software developer at a tech company where I was responsible for developing and maintaining web applications."
                result="Promoted to Senior Developer"
            />
            <SkillInfo 
                title="Software Developer"
                subtitle="Tech Company"
                description="Worked as a software developer at a tech company where I was responsible for developing and maintaining web applications."
                result="Promoted to Senior Developer"
            />
        </div>
    </div>
</motion.div>
  )
}
