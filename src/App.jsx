import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Hero } from "./components/Hero"
import { SobreMi } from "./components/SobreMi"
import { Proyectos } from "./components/Proyectos"
import { Contactos } from "./components/Contactos"

export const App = () => {

  return (

    <BrowserRouter>
      <div className="relative flex mx-auto sm:px-14 md:py-10 py-8 px-4 items-center">
        <div className="md:fixed sm:fixed w-full md:w-1/4">
          <Hero />
        </div>
        <div className="lg:ml-[30%] lg:w-3/4 transition-transform duration-700 ease-in-out">
          <Routes>
            <Route path="/" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contactos" element={<Contactos />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  )
}
