"use client";
import { motion } from "framer-motion";
import {links} from '@/app/lib/data'
import Link from "next/link";
export default function Header(){
    return (<>
     <motion.div
      className="intro"
      initial={{y:-100, x:"50%",opacity:0 }}
      animate={{y:0,x:"50%", opacity:1 }}
      transition={{
        duration: 0.7,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
    <ul className="cursor-pointer menu-list ">
       {links.map((link)=>(
        <li key={link.hash}>
          <Link href={link.hash}>{link.link}</Link>
       </li>))
      }
        
    </ul>
  </motion.div>
    </>)
}
