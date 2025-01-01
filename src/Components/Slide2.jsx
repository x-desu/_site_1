import { useEffect, useState } from "react"
import Image from "./Image";

const Slide2 = () => {
    const [currentSlide,setCurrentSlide]= useState(0)
   

    useEffect(()=>{
        const interval = setInterval(handleNextSlide, 5000);
        return ()=> clearInterval(interval)
    },[])

    const reviews = [
        { text: "This website is amazing! I found exactly what I needed.", name: "Alex T." },
        { text: "Highly recommend! The user interface is super easy to navigate.", name: "Mia S." },
        { text: "Great customer service, quick response time!", name: "Rahul K." },
        { text: "An excellent platform for finding quality products.", name: "Tech Solutions Inc." }
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prev)=>(prev+1)%reviews.length)
    }
  return (
    <div className="px-4 sm:px-0 py-8 my-8">
        <h1 className="sm:text-2xl text-xl font-bold text-center">Built for {"today's"}</h1>
        <h1 className="sm:text-2xl text-xl font-bold text-center">ambitious businesses</h1>
        <p className="py-4 text-base sm:text-lg font-medium text-center">Thousands of forward-thinking businesses rely on [name] everyday to turbo-charge their business financial operations</p>
    <div className="flex sm:flex-row flex-col w-full my-8 justify-center bg-black items-center">
        <div className="sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-center gap-4 p-8">
        <div className=" flex justify-center text-neutral-200 items-center max-h-4">
                <p className="text-lg sm:text-xl max-w-full break-words font-semibold text-center italic">`{reviews[currentSlide].text}`</p>
            </div>
            <div className="flex justify-center items-center mt-2 text-neutral-500">
                <p className="text-sm font-semibold">{reviews[currentSlide].name}</p>
            </div>
            {/* dots */}
            <div className="flex justify-center gap-3 ">
            {reviews.map((item,index)=>(
                <div key={index}
                className={`w-2 h-2 rounded-full transition-all
                    ${index === currentSlide ? 'bg-neutral-200 ' : 'bg-neutral-400'}`}
                    >  
                </div>
            ))}
            </div>
        </div>
        <div className="sm:w-1/2 h-full sm:h-full flex justify-around  overflow-hidden">
        <div className="sm:h-full h-44 " >
            <Image className="w-full h-full  sm:object-contain" 
            path="review.jpg"
            w={814} 
            />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Slide2