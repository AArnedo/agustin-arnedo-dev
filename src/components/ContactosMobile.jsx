import { motion } from "motion/react"
import { FAQs } from "./FAQs"
import { MdOutlineEmail } from "react-icons/md"
import { handleContactos, handleHero, handleNavToggle, handleProyectos, handleSobreMiClick } from "../utils/navHandlers"
import { IoCloseSharp, IoMenuOutline } from "react-icons/io5"
import { SobreMiMobile } from "./SobreMiMobile"
import { Hero } from "./Hero"
import { ProyectosMobile } from "./ProyectosMobile"
import { useState } from "react"
import logo from '../assets/logo.png'

export const ContactosMobile = () => {

    const [nav, setNav] = useState(false)
    const [showSobreMi, setShowSobreMi] = useState(false)
    const [showHero, setShowHero] = useState(false)
    const [showProyectos, SetShowProyectos] = useState(false)
    const [showContactos, setShowContactos] = useState(false)
    
    if(showSobreMi) {
        return <SobreMiMobile/>
    }
    if(showHero) {
        return <Hero/>
    }
    if(showProyectos) {
        return <ProyectosMobile/>
    }
    if(showContactos) {
        return <ContactosMobile/>
    }
    
  return (
    <>
        <div onClick={() => handleNavToggle(nav, setNav)} className="cursor-pointer pb-4 flex justify-end">
            {!nav ? <IoMenuOutline size={30} className="sm:hidden text-[#D9D9D9]"/> : <IoCloseSharp size={30} className="sm:hidden absolute z-40 right-8 top-10 text-[#D9D9D9]"/>}
        </div>
        <div className={`fixed bg-[#222222] border-r-1 left-0 top-0 h-full pt-14 pl-4 w-[100%] z-10 text-[#D9D9D9] text-xl transition-all duration-500 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className="p-4">
                <img src={logo} alt="/" className="w-[80px] m-4" />
                <li className="border-b-1 p-4 hover:underline" onClick={() => handleHero(setNav, setShowHero)}>Inicio</li>
                <li className="border-b-1 p-4 hover:underline" onClick={() => handleSobreMiClick(setNav, setShowSobreMi)}>Sobre mi</li>
                <li className="border-b-1 p-4 hover:underline" onClick={() => handleProyectos(setNav, SetShowProyectos)}>Proyectos</li>
                <li className="border-b-1 p-4 hover:underline" onClick={() => handleContactos(setNav, setShowContactos)}>Contactos</li>
            </ul>
        </div>
        <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}  
      >
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 justify-center border-[#7d7d7da2] px-10 pb-8 items-center text-[#D9D9D9]  ">
                <h2 className="text-3xl text-center">¡No dudes en contactarme!</h2>
                <div className="flex items-center gap-2">
                    <MdOutlineEmail size={30} className="text-[#00B6FE]"/>
                    <span className="underline">arnedoagustin@gmail.com</span>
                </div>
            </div>
            <hr className="text-[#D9D9D9]"/>
            <div>
                <FAQs />
            </div>
        </div>
        </motion.div>
    </>
  )
}
