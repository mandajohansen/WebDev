import React from "react";
import { aboutImg } from "../../assets/index";
import { HiMail } from "react-icons/hi";


const Contact = () => {
    return (
        <section
            id="contact"
            className='w-full py-20 border-b-[1px] border-b-detail'>
            <div className="flex items-center justify-center text-center pb-5 gap-4">
                <h3 className="text-5xl uppercase font-semibold text-title">Contact me</h3>
                <HiMail className=" text-7xl text-title pt-2" />

            </div>
            <div className="w-full">
                <div className="w-full h-auto flex justify-between">
                    <div className="w-[35%] h-full bg-gradient-to-r from-title via-hover to-detail p-8 relative shadow-sm">
                    </div>
                    <div className="w-[60%] h-full p-8 flex flex-col justify-between bgOpacity">
                        <form className="w-full flex flex-col gap-6 py-2">
                            <div className="w-full flex gap-10">
                                <div className="w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-title uppercase tracking-wide">YOUR NAME</p>
                                    <input type="text" className="contactInput" />
                                </div>
                                <div className="w-1/2 flex flex-col gap-4">
                                    <p className="text-sm text-title uppercase tracking-wide">Phone number</p>
                                    <input type="text" className="contactInput" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-title uppercase tracking-wide">Email</p>
                                <input type="text" className="contactInput" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-title uppercase tracking-wide">Subject</p>
                                <input type="text" className="contactInput" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-title uppercase tracking-wide">Your message</p>
                                <textarea className="contactTextArea" cols="30" rows="8"></textarea>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Contact