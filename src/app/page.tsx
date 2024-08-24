'use client';
import dynamic from "next/dynamic";
const Header =dynamic(()=>import('./components/header/page'),{loading:()=><>loading...</>});
const Profile=dynamic(()=>import('./components/profile/page'),{loading:()=><>loading...</>});
const Education=dynamic(()=>import('./components/education/page'),{loading:()=><>loading...</>});
const Skills =dynamic(()=>import('./components/skills/page'),{loading:()=><>loading...</>});
const Career =dynamic(()=>import('./components/career/page'),{loading:()=><>loading...</>});
const Footer =dynamic(()=>import('./components/footer/page'),{loading:()=><>loading...</>});
const Contact = dynamic(()=>import('./components/contact/page'),{loading:()=><>loading...</>})
export default function Home() {
  return (
    <>
    <Header/>
    <Profile/>
    <Education/>
    <Career/>
    <Skills/>
    <Contact/>
    <Footer/>
   
    </>
  );
}
