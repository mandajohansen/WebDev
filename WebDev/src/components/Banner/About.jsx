import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";

const About = () => {
    const [text] = useTypewriter({
        words: ["girls.", "players.", "comedians."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })
    return (
        <section 
        id="about"
        className='w-full pt-8 pb-20 flex'>

            <div className="w-1/2">
                <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-normal">Hello in my World</h4>
                    <h1 className="text-6xl font-bold text-title">
                        Hello, we are {" "}
                            <span className="text-hover">Amanda and Mathilde,
                        </span>
                        </h1>
                        <h2 className="text-2xl font-bold">
                            {/* a */} <span>{text}</span>
                            <Cursor
                            cursorStyle="|"
                            cursorColor="pink"
                            />
                        </h2>
                        <p className="text-base font-bodyFont leading-6 tracking-wide">
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with 
                        the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsum.
                        </p>
                </div>  
            </div>  
            <div className="w-1/2"></div> 
        </section>

    )
}

export default About