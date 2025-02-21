import { IoCloseSharp, IoLogoJavascript, IoMenuOutline } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { motion } from "motion/react";
import { useState } from "react";
import { Hero } from "./Hero";
import logo from '../assets/logo.png'
import { handleNavToggle, handleSobreMiClick, handleHero, handleProyectos, handleContactos } from "../utils/navHandlers";
import { ProyectosMobile } from "./ProyectosMobile";
import { ContactosMobile } from "./ContactosMobile";

export const SobreMiMobile = () => {

  const [nav, setNav] = useState(false)
  const [showHero, setShowHero] = useState(false)
  const [showSobreMi, setShowSobreMi] = useState(false)
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
    <div>
      <div onClick={() => handleNavToggle(nav, setNav)} className="cursor-pointer pb-2 flex justify-end">
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
        <div className="flex bg-[#D9D9D9] max-w-[800px] min-h-[60vh] mx-auto rounded-2xl">
          <div className="flex justify-center items-center px-8 py-4">
            <div className="flex flex-col">
              <div className="pb-4">
                <h2 className="text-lg text-[#004363]">¡Hola! soy</h2>
                <h1 className="text-2xl uppercase">Agustin Arnedo</h1>
              </div>
              <p className="text-sm text-[#004363]">Soy un apasionado de la tecnología y descubrí mi vocación en la programación de manera autodidacta. Desde que me sumergí en el mundo IT, he sentido una conexión increíble con este campo. Me encanta leer sobre nuevas tecnologías y aprender algo nuevo cada día, siempre buscando crecer y mejorar mis habilidades. Estoy comprometido con mi desarrollo personal y profesional, y con ganas de seguir avanzando en esta industria que me inspira tanto.</p>
              <div className="text-center py-2">
                <h2 className="underline">Mis habilidades</h2>
              </div>
              <div className="flex justify-between w-[100%] py-3">
                <IoLogoJavascript size={30}/>
                <RiReactjsFill size={30}/>
                <RiTailwindCssFill size={30}/>
                <FaNodeJs size={30}/>
                <DiMongodb size={30}/>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
    </div>
  )
}
