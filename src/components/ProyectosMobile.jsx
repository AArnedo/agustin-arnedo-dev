import { IoCloseSharp, IoMenuOutline } from "react-icons/io5"
import { handleContactos, handleHero, handleNavToggle, handleProyectos, handleSobreMiClick } from "../utils/navHandlers"
import { useState } from "react"
import { SobreMiMobile } from "./SobreMiMobile"
import { Hero } from "./Hero"
import { CardProyect } from "./CardProyect"
import { motion } from "motion/react"
import proyecto1 from '../assets/proyecto1.png'
import proyecto2 from '../assets/proyecto2.png'
import proyecto3 from '../assets/proyecto3.png'
import proyecto4 from '../assets/proyecto4.png'
import proyecto5 from '../assets/proyecto5.png'
import logo from '../assets/logo.png'
import { ContactosMobile } from "./ContactosMobile"


const proyectos = [
    {
      image: proyecto1, 
      title: 'TiendaBook',
      description: 'Plataforma web donde los usuarios pueden comprar, vender o donar libros de manera sencilla y rápida. La idea principal es promover el intercambio de conocimiento y dar una segunda vida a los libros',
      link: 'https://tienda-book.vercel.app/'
    },
    {
      image: proyecto2,
      title: 'Hosting Web Site',
      description: 'Este es un proyecto Frontend desarrollado utilizando React, TailwindCSS, y JavaScript. El diseño está basado en una plantilla de Figma que encontré, y lo repliqué completamente en código para practicar mis habilidades de desarrollo web.',
      link: 'https://hosting-web-site.vercel.app/'
    },
    {
      image: proyecto3,
      title: 'TaskFlow',
      description: 'Este proyecto consiste en una aplicación de gestión de tareas desarrollada para mejorar la productividad y el seguimiento de proyectos. La aplicación permite a los usuarios organizar, priorizar y gestionar sus tareas diarias de manera eficiente, ofreciendo un entorno intuitivo y de fácil uso.',
      link: 'https://task-flow-js.vercel.app/'
    },
    {
      image: proyecto4,
      title: 'Cafe-Lite Ecommerce',
      description: 'Aplicación de venta de café con carrito de compras integrado. Permite explorar productos, agregar al carrito, gestionar pedidos y realizar pagos en un entorno intuitivo y moderno.',
      link: 'https://cafe-lite-ecommerce.vercel.app/'
    },
    {
      image: proyecto5,
      title: 'Cafe Street',
      description: 'Proyecto de practica en maquetacion Frontend a base de una plantilla en Figma, replicado completamente en codigo.',
      link: 'https://street-cafe-ej.netlify.app/'
    }
  ];


export const ProyectosMobile = () => {
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
    <div className="h-[100vh] relative py-10">
        <div onClick={() => handleNavToggle(nav, setNav)} className="cursor-pointer pb-2 px-4 flex justify-end">
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
        <div className="text-center text-white py-2">
            <h2>Estos son algunos de mis proyectos ❤</h2>
            <hr className="w-[80%] mx-auto pb-4"/>
        </div>
        <div>
            {proyectos.map((proyecto, index) => (
                <CardProyect
                    key={index}
                    image={proyecto.image}
                    title={proyecto.title}
                    description={proyecto.description}
                    link={proyecto.link}
                />
            ))}
        </div>
        </motion.div>
    </div>
  )
}
