import { FooterSVG } from "./FooterSVG"

export default function Footer() {
    return (<>
        
     <section className="footer flex text-center text-gray-200 ">
     <FooterSVG />
            <section className="profile-pic m-auto mt-16">
                <small>
                    &copy;2030 Atul. All rights reserved.
                </small>
                <p><span>About this website:</span></p>
                <span> buit with React & Next.js (App Router & Server Actions), TypeSript, Tailwind CSS, CSS, Framer Motion, React Email & Resend, Vercel</span>
            </section>
            <strong>
            </strong>
        </section>
    </>)
}