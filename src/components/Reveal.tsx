"use client";
import {motion,useReducedMotion} from "framer-motion";
export default function Reveal({children,delay=0}:{children:React.ReactNode,delay?:number}){const reduced=useReducedMotion();return <motion.div initial={reduced?false:{opacity:0,y:24,filter:"blur(5px)"}} whileInView={{opacity:1,y:0,filter:"blur(0px)"}} viewport={{once:true,amount:0.1}} transition={{duration:.55,delay,ease:[.2,.7,.2,1]}}>{children}</motion.div>}
