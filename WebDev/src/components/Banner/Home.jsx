import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {FaLinkedin, FaInstagram, FaTwitter, FaFacebook} from "react-icons/fa";
/*import {SiTailwindcss, SiFigma} from "react-icons/si";*/
import {aboutImg} from "../../assets/index";


const Home = () => {
    const [text] = useTypewriter({
        words: ["girls.", "players.", "comedians."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 50,
        delaySpeed: 2000,
    })
    return (
        <section 
        id="home"
        className='w-full pt-8 pb-20 flex items-center border-b-[1px] border-b-detail'>
            <div className="w-1/2 flex flex-col gap-20">
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
                            cursorColor="#ffc6cc"
                            />
                        </h2>
                        <p className="text-base font-bodyFont leading-6 tracking-wide">
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industrys 
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
                 <div>
                    <h2 className="text-base uppercase mb-4">
                        Find us on social media
                    </h2>
                    <div className="flex gap-4">
                        <span className="aboutIcons">
                            <FaLinkedin />
                        </span>
                        <span className="aboutIcons">
                            <FaInstagram />
                        </span>
                        <span className="aboutIcons">
                            <FaTwitter />
                        </span>
                        <span className="aboutIcons">
                            <FaFacebook />
                        </span>
                    </div>
                </div>
            </div>  

              {/* Nu er det til billede siden*/}
            <div className="w-1/2 flex justify-center items-center relative">
                <img className="w-[500px] h-[400px] z-10 object-cover rounded-lg"
                src={aboutImg} 
                alt="aboutImg"
                />
                <div className="absolute bottom-0 w-[450px] h-[450px] bg-gradient-to-r
                 from-title via-hover to-detail felx justify-center items-center rounded-full"></div>
            </div> 
        </section>

    )
}

export default Home