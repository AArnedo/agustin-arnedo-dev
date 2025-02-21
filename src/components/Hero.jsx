import { SiGithub }  from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { ReactTyped } from "react-typed";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { useState } from "react";
import { SobreMiMobile } from "./SobreMiMobile";
import { handleNavToggle, handleSobreMiClick, handleHero, handleProyectos, handleContactos } from "../utils/navHandlers";
import { ProyectosMobile } from "./ProyectosMobile";
import { ContactosMobile } from "./ContactosMobile";
import logo from '../assets/logo.png'
import CV from '../assets/Agustin ArnedoCV.pdf'

export const Hero = () => {
    const [nav, setNav] = useState(false)
    const [showHero, setShowHero] = useState(false)
    const [showSobreMi, setShowSobreMi] = useState(false)
    const [showProyectos, SetShowProyectos] = useState(false)
    const [showContactos, setShowContactos] = useState(false)

    if(showHero) {
        return <Hero/>
    }
    if(showSobreMi) {
        return <SobreMiMobile/>
    }
    if(showProyectos) {
        return <ProyectosMobile/>
    }
    if(showContactos) {
        return <ContactosMobile/>
    }
    const downloadCV=() =>{
        window.open(CV)
    }

  return (
    <div className="relative bg-gradient-to-b from-[#7A7A7A] to-[#383838] mx-auto max-w-[1240px] px-4 py-2 md:py-6 rounded-2xl">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}  
        >
        <div className="mx-auto flex flex-col py-4">
            <div className="flex justify-between px-4 items-center">
                <img src={logo}  alt="Logo de 'Agustin Arnedo'" className="w-[80px] sm:mx-auto" />
                <div onClick={() => handleNavToggle(nav,setNav)} className="cursor-pointer">
                    {!nav ? <IoMenuOutline size={30} className="sm:hidden text-[#D9D9D9]"/> : <IoCloseSharp size={30} className="sm:hidden absolute z-40 right-8 top-10 text-[#D9D9D9]"/>}
                </div>
            </div>
            <div className={`fixed bg-[#222222] border-r-1 left-0 top-0 h-full pt-14 pl-4 w-[100%] z-10 text-[#D9D9D9] text-xl transition-all duration-500 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="p-4">
                    <img src={logo} alt="Logo de 'Agustin Arnedo'" className="w-[80px] m-4" />
                    <li className="border-b-1 p-4 hover:underline" onClick={() => handleHero(setNav, setShowHero)}>Inicio</li>
                    <li className="border-b-1 p-4 hover:underline" onClick={() => handleSobreMiClick(setNav, setShowSobreMi)}>Sobre mi</li>
                    <li className="border-b-1 p-4 hover:underline" onClick={() => handleProyectos(setNav, SetShowProyectos)}>Proyectos</li>
                    <li className="border-b-1 p-4 hover:underline" onClick={() => handleContactos(setNav, setShowContactos)}>Contactos</li>
                </ul>
            </div>
            <h1 className="sm:text-6xl md:text-4xl text-3xl  text-[#FCFCFC] text-bold text-center py-4">Agustin Arnedo</h1>
            <div className="flex items-center gap-1 bg-[#D9D9D9] mx-auto px-6 py-2 rounded-2xl text-[#222222]">
                <p className="">Desarrollador </p>
                <ReactTyped strings={['Web', 'FrontEnd']} typeSpeed={140} backSpeed={130} loop className="text-bold underline"/>
            </div>
        </div>
        <hr className="text-white w-[80%] mx-auto"/>
        <div className="py-8 flex flex-col flex-wrap gap-6 text-sm">
            <div className="flex flex-wrap items-center gap-4">
                <div className="bg-[#222222] p-2 rounded-xl">
                    <SiGithub size={30} className="text-white"/>
                </div>
                <div className="text-white">
                    <a href="https://www.github.com/AArnedo" target="blank" rel="noreferrer">
                        <h3 className="underline hover:text-[#00B6FE] duration-[.5s] lg:text-xl sm:text-md text-lg">GitHub</h3>
                        <p className="opacity-80 lg:text-md md:text-md text-xs">github.com/AArnedo</p>
                    </a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-[#222222] p-2 rounded-xl">
                    <FaLinkedin size={30} className="text-white"/>
                </div>
                <div className="text-white">
                    <a href="https://www.linkedin.com/in/agustinarnedo/" target="blank"> 
                        <h3 className="underline hover:text-[#00B6FE] duration-[.5s] lg:text-xl sm:text-md text-lg">Linkedin</h3>
                        <p className="opacity-80 lg:text-md md:text-md text-xs">linkedin.com/in/agustinarnedo/</p>
                    </a>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-[#222222] p-2 rounded-xl">
                    <FaInstagram size={30} className="text-white"/>
                </div>
                <div className="text-white">
                    <a href="https://www.instagram.com/arnedoagustin/" target="blank">
                        <h3 className="underline hover:text-[#00B6FE] duration-[.5s] lg:text-xl sm:text-md text-lg">Instagram</h3>
                        <p className="opacity-80 lg:text-md md:text-md text-xs">instagram.com/arnedoagustin/</p>
                    </a>
                </div>
            </div>
        </div>
        <hr className="text-white w-[80%] mx-auto"/>
        <div className="flex justify-center py-4 sm:py-10">
            <button onClick={() =>{downloadCV(CV)}} className="flex items-center gap-4 bg-[#D9D9D9] text-l text-[#222222] px-8 py-4 lg:py-3 rounded-4xl cursor-pointer transition-transform duration-300 hover:scale-105">Descargar CV <IoMdDownload size={20}/></button>
        </div>
        </motion.div>
    </div>
  )
}
