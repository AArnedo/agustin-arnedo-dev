import { FAQs } from "./FAQs";
import { Navbar } from "./Navbar"
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "motion/react";

export const Contactos = () => {
  return (
    <>
    <div className="relative flex items-center justify-around min-h-[85vh] col-span-3 bg-gradient-to-b from-[#383838] to-[#7A7A7A] max-w-[1240px] rounded-2xl">
        <Navbar />
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}  
      >
        <div className="flex gap-10">
            <div>
                <FAQs />
            </div>
            <div className="flex flex-col min-h-[300px] gap-4 justify-center border-l-2 border-[#7d7d7da2] px-10 items-center text-[#D9D9D9]  ">
                <h2 className="text-3xl">¡No dudes en contactarme!</h2>
                <div className="flex items-center gap-2">
                    <MdOutlineEmail size={30} className="text-[#00B6FE]"/>
                    <span className="underline">arnedoagustin@gmail.com</span>
                </div>
            </div>
        </div>
        </motion.div>
    </div>
    </>
  )
}
