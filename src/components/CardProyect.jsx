import { Link } from "react-router-dom"
import { GoArrowDownLeft } from "react-icons/go";

export const CardProyect = ({image, title, description,link}) => {
  return (
    <>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:p-6 py-4 border-b-1 border-[#7A7A7A] hover:bg-[#222222] duration-300">
                <img src={image} className="md:w-[400px] w-[400px] min-h-[140px] px-4"/>
                <div className="flex flex-col gap-3 md:border-l-2 border-[#7A7A7A] md:px-10 px-4 text-[#FCFCFC]">
                    <h2 className="text-2xl underline">{title}</h2>
                    <p className="text-[#BFBFBF]">{description}</p>
                    <div className="flex items-center">
                        <Link to={link} target="_blank"><p className="underline text-lg hover:text-[#00B6FE] duration-300">Link</p></Link>
                        <GoArrowDownLeft size={15}/>
                    </div>      
                </div>
            </div>  
    </>
  )
}
