import { Navbar } from "./Navbar"
import { CardProyect } from "./CardProyect"
import { motion } from "motion/react"
import proyecto1 from '../assets/proyecto1.png'
import proyecto2 from '../assets/proyecto2.png'
import proyecto3 from '../assets/proyecto3.png'
import proyecto4 from '../assets/proyecto4.png'
import style from '../styles/proyectos.module.css'

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
    }
  ];


export const Proyectos = () => {
  return (
    <div className="hidden md:block relative w-full h-[85vh] bg-gradient-to-b from-[#7A7A7A] to-[#383838] py-10 px-8 rounded-2xl">
      <div  className="hidden lg:block">
        <Navbar/>
      </div>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}  
      >
      <div className={`${style.projectsContainer} my-18 rounded-xl bg-[#313131] max-h-[60vh] overflow-y-auto`}>
      <div className="text-center text-white py-2">
        <h2>Estos son algunos de mis proyectos ❤</h2>
        <hr className="w-[80%] mx-auto"/>
      </div>
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
