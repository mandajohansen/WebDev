import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {FaLinkedin, FaInstagram, FaTwitter, FaFacebook} from "react-icons/fa";
/*import {SiTailwindcss, SiFigma} from "react-icons/si";*/
import {aboutImg} from "../../assets/index";


const Home = () => {
    const [text] = useTypewriter({
        words: ["student.", "hard worker.", "team player."],
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
                    <h4 className="text-lg font-normal">Welcome to my portfolio</h4>
                    <h1 className="text-6xl font-bold text-title">
                        Hello, I'am {" "}
                            <span className="text-hover">Amanda
                        </span>
                        </h1>
                        <h2 className="text-2xl font-bold">
                            a <span>{text}</span>
                            <Cursor
                            cursorStyle="|"
                            cursorColor="#ffc6cc"
                            />
                        </h2>
                        <p className="text-base font-bodyFont leading-6 tracking-wide">
                        This is my portfolio, where I will show you a bit about me, 
                        my projects, skills and if you want to get in contact, you can 
                        send me a mail through the contact form. This is my first time 
                        making a website, which is done thorough my course called web 
                        development. It has been an exciting and challenging task, and
                        with not knowledge to begin with I feel were pleased with the 
                        outcome and final product. I hope you will enjoy having a little
                        look into who i am, the projects I have done and the skills and
                        experience I have gained through my studies and work experience.
                        </p>
                </div>  
                 <div>
                    <h2 className="text-base uppercase mb-4">
                        Find me on social media
                    </h2>
                    <div className="flex gap-4">
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
            </div>  

              {/* Nu er det til billede siden*/}
            <div className="w-1/2 flex justify-center left-10 items-center relative">
                <img className="w-[500px] h-[600px] pl-12 pb-16 z-10 object-cover rounded-lg"
                src={aboutImg} 
                alt="aboutImg"
                />
                <div className="absolute bottom-0 w-[550px] h-[550px] bg-gradient-to-r
                 from-title via-hover to-detail felx justify-center items-center rounded-full"></div>
            </div> 
        </section>

    )
}

export default Home