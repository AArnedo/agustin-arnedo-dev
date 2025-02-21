import { Navbar } from "./Navbar"
import fotoAgus from "../assets/fotoAgustin.jpg";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { motion } from "motion/react";

export const SobreMi = () => {
  return (
    <div className="relative py-24 col-span-3 bg-gradient-to-b from-[#7A7A7A] to-[#383838] max-w-[1240px] rounded-2xl hidden lg:block">
        <Navbar />
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}   
        >
        <div className="flex bg-[#D9D9D9] max-w-[800px] min-h-[60vh] mx-auto rounded-2xl">
          <div className="flex justify-center gap-4 items-center px-10 py-4">
            <img src={fotoAgus} alt="Fotografia de Agustin" className="size-[300px]" />
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl">¡Hola! 👋</h2>
              <p className="text-sm text-[#004363]">Soy un apasionado de la tecnología y descubrí mi vocación en la programación de manera autodidacta. Desde que me sumergí en el mundo IT, he sentido una conexión increíble con este campo. Me encanta leer sobre nuevas tecnologías y aprender algo nuevo cada día, siempre buscando crecer y mejorar mis habilidades. Estoy comprometido con mi desarrollo personal y profesional, y con ganas de seguir avanzando en esta industria que me inspira tanto.</p>
              <div className="flex justify-between w-[100%] pt-3">
                <IoLogoJavascript size={40}/>
                <RiReactjsFill size={40}/>
                <RiTailwindCssFill size={40}/>
                <FaNodeJs size={40}/>
                <DiMongodb size={40}/>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
    </div>
  )
}
