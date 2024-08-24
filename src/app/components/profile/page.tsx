"use client";
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import { HiDownload, HiLink } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
export default function Profile() {
    return (
        <>
            <section id='home' className="flex flex-col items-center justify-center m-auto max-w-[45rem] h-72 scroll-mt-32 leading-8 ">
                <section className="profile-pic m-auto ">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        whileInView="animate"
                        viewport={{
                           once:false
                        }}
                    >
                        

                        <Image
                            className='dpradius bg-slate-200 w-24 h-24 object-cover border-[0.20rem] border-white'
                            src="/profile.jpg"
                            width={192}
                            height={192}    
                            priority={true}
                            quality={95}
                            alt="Picture of the author"
                        />
                    </motion.div>
                </section>
                <motion.div
                    className='pt-5'
                    initial={{ y: 0, x: "0%", opacity: 0 }}
                    animate={{ y: -30, x: "0%", opacity: 1 }}
                    transition={{
                        duration: 0.7,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <section className='flex flex-col items-center justify-center m-auto'>
                        <div className="w-max">
                            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                                Hello I am <b className='text-blue-600'>Atul</b>
                            </h1>
                        </div>
                        <div className='text-center text-white '>
                            I'm a Software Engineer with 5 year of experience. i enjoy building customize application in different domains my focus is in React(Nextjs + AI) for good user experince
                        </div>

                        <div className='flex justify-center items-center '>
                            <Link href={'#'} className='bg-white flex mx-2 mt-3 p-2 h-8 items-center rounded-full focus:scale-110 hover:scale-110 '>  Download CV <span className='w-100 bg-black text-white rounded-full opacity-80'><HiDownload /></span></Link>
                            <Link href={'#'} className='bg-white flex flex-row mt-3 p-2 h-8 items-center rounded-full focus:scale-110 hover:scale-110 active:scale-105'>  <BsLinkedin className='opacity-80' /></Link>
                        </div>
                    </section>
                </motion.div>
            </section>
            <motion.section
            initial={{
                scaleX:0,
                scaleY:1,
            }}
            animate={{
                scaleX:1,
                scaleY:1,
            }}
            transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            id="about" className='text-center text-white m-auto max-w-[45rem] leading-8 mb-2'>
                <h2 className=' text-3xl font-medium capitalize'>About us</h2>
                <p>Experienced software professional with <b>5 years </b> of expertise in software coding, analysis, design, and planning. Skilled in developing user-friendly UI and proficient in
                    <b>&nbsp;ReactJs(4.5 year)</b>, NodeJs(2.5 year), JavaScript(5 year), HTML5, CSS3, and Bootstrap4, git, github. Strong track record of customer interaction involving technical
                    consulting,solution design, planning, development, and deployment. Proficient in Object-Oriented Languages like C++. Collaborates closely with teams to support projects
                    throughout all phases of delivery, while also conducting testing to identify and document bugs and technical issues.</p>
                <p className='my-2'>
                    when i'm not coding, i enjoy <b>gyming</b>, playing Cricket, watching Movies, and play with animal(cow,dog). i also enjoy learning new things. new business idea. and when i have a lot of time then i love to go solo traveling.
                    i'm playing guiter in free time

                </p>
            </motion.section>
        </>
    )
}