import React from "react";
import { TfiEmail } from "react-icons/tfi";


const Contact = () => {
    return (
        <section id="contact" className="w-full py-20 border-b-[1px] border-b-detail">
            <div className="flex items-center justify-center text-center pb-5 gap-4">
            <TfiEmail className="text-6xl text-hover pt-2" />
                <h3 className="text-5xl uppercase font-semibold text-title">Contact me</h3>
                <TfiEmail className="text-6xl text-hover pt-2" />
            </div>
            <div className="w-full">
                <div className="w-full h-auto flex justify-between">
                    <div className="w-full h-full p-8 flex flex-col justify-between bgOpacity">
                        <form className="w-full flex flex-col gap-6 py-2">
                            <div className="w-full flex gap-10">
                                <div className="w-full flex flex-col gap-4">
                                    <p className="text-sm text-title uppercase tracking-wide">Your Name</p>
                                    <input type="text" className="contactInput" />
                                </div>
                                <div className="w-full flex flex-col gap-4">
                                    <p className="text-sm text-title uppercase tracking-wide">Phone Number</p>
                                    <input type="text" className="contactInput" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-title uppercase tracking-wide">Email</p>
                                <input type="email" className="contactInput" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-title uppercase tracking-wide">Subject</p>
                                <input type="text" className="contactInput" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <p className="text-sm text-title uppercase tracking-wide">Your Message</p>
                                <textarea className="contactTextArea" cols="30" rows="8"></textarea>
                            </div>
                            <div className="w-full">
                                <button className="w-full h-12 py-3 bg-hover rounded-lg text-white uppercase font-semibold hover:text-detail duration-300 hover:border-[1px] hover:border-detail">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
