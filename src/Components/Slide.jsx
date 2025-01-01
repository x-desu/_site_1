import { useState } from "react"
import Image from "./Image"

const Slide = () => {
    const [active,setActive] = useState({index:0,src:"pexels_scale.jpg"})
    
    const handleClick = (index) => {
        let setsrc = ""
        if(index===0){
            setsrc="pexels_scale.jpg"
        }
        else if(index===1){
            setsrc="pexels_security.jpg"
        }else{
            setsrc="pixels_support.jpg"
        }
        setActive((prev)=>({
            ...prev,
            index:index,
            src:setsrc
        }))
    }
       
    return (
    <div className="md:px-8 md:py-8 px-4 py-8 sm:min-h-[714px] sm:max-h-[714px] min-h-[802px] overflow-hidden">
    <h1 className="w-full my-14 text-xl font-bold sm:w-1/2 text-center">Everything You Need, Nothing You {`Don’t`}.
    </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-around ">
            <div className="sm:w-1/2 w-full flex flex-col gap-16 sm:justify-evenly">
            {
            [
                {
                    title: "Scalable Solutions",
                    description: "Customized software solutions designed to grow with your business.",
                  },
                  {
                    title: "Secure Systems",
                    description: "State-of-the-art security to protect your data and ensure peace of mind.",
                  },
                  {
                    title: "24/7 Support",
                    description: "Round-the-clock assistance to keep your operations running smoothly.",
                  },
            ].map((item,index)=>{
                return(
                    <div key={index}
                     className="flex gap-2 items-center cursor-pointer
                      transition-all"
                     onClick={() => handleClick(index)}
                    >
                    <div className={`w-0.5 h-16 ${
                  active?.index === index ? "bg-[#0BCE5A]" : "bg-transparent"
                }`}></div>
              <div className={active?.index === index ? "opacity-100" : "opacity-50"}>
                <h1 className="font-semibold sm:text-xl">{item.title}</h1>
                <span className="text-sm sm:text-lg">{item.description}</span>
              </div>
                </div>
                )
            })
            }
            </div>
            <div className="rounded-lg mt-8  sm:mt-0 mx-auto sm:mx-0" key={active.src}>
            {<Image className={`rounded-lg object-fill w-full h-full transition-opacity duration-500 ease-in-out`}
            path={active?.src} w={812} h={514}
            />}
            </div>
        </div>
    </div>
  )
}

export default Slide