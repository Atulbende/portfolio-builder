'use client';
import { sendMail } from "@/app/server/actions";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
    const [isLoading,setIsLoading]=useState(false);
    const sendEmail=(async(formData:FormData)=>{
        console.log('adas1')
        setIsLoading(true);
        setTimeout(()=>{
            sendMail(formData).then((res)=>{
                console.log('res',res)
                if(res){
                      setIsLoading(false);
                }
            });
        },2000)
       
      
      
    })
    return (
    <>
        <section id='contact' className="m-auto mt-5 mb-5 scroll-mt-28 w-[min(100%,32rem)] px-5">
            <div className='flex justify-center'>
                <h2 className='text-gray-200 text-3xl font-medium capitalize'>Contact</h2>
            </div>
            <form className=" flex flex-col  items-left mt-1" action={sendEmail}>
                <span className="text-gray-300 text-center">Please contact me direct to this mail <a className="underline" href="mailto:atulbende92@gmail.com">atulbende92@gmail.com</a></span>
                <input name="email" type="email" required className="mb-3 mt-3 text-[#ffffffb8] bg-[#686a7b5c] px-3 h-10 w-full m-auto rounded-lg outline-none" placeholder="Email">
                </input>
                <textarea name="message" required className="text-[#ffffffb8] bg-[#686a7b5c] mb-3 h-52 m-auto rounded-lg w-full outline-none px-3" placeholder="Message"></textarea>
                <button type="submit" className="group text-[#ffffffb8] bg-[#686a7b5c] w-[7rem] h-[2.5rem] rounded-full flex justify-center items-center gap-2 hover:scale-110 active:scale-105">
                    
            Submit{" "}{ 
                !!isLoading ?<div className="custom-loader"></div>:
                !isLoading && <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 " />

                }{" "}</button>
            </form>
        </section>
    </>);
}

export default Contact;