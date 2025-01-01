import { faArrowRight, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import Slide from "../Components/Slide"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide2 from "../Components/Slide2";
import Slide3 from "../Components/Slide3";
import Image from "../Components/Image";

const Homepage = () => {
  return (
    <>
    {/* header 1 */}
    <div className=" flex justify-between lg:justify-around items-center gap-4 text-white bg-neutral-950 h-1/2 
    px-4 py-8 md:px-8 md:py-16 my-14">
        <div className="w-full  md:w-1/4 flex flex-col gap-6  text-center md:text-left ">
            <h1 className="font-bold text-xl md:text-3xl leading-snug">Innovative Software Solutions for Your Business Success</h1>
            <p className="text-sm md:text-lg">Empowering companies with tailored software solutions to optimize performance, enhance efficiency, and drive growth</p>
            <button className="mt-8 text-base md:text-lg bg-[#0BCE5A]/60 w-2/3 md:w-1/3 mx-auto md:mx-0 rounded-md flex items-center justify-center py-2 active:scale-110 transition-transform">
            Get Started
            </button>
        </div>
        <div className=" w-full md:w-1/2 max-w-lg rounded-sm  flex justify-center sm:h-full sm:justify-start">
        <Image className="object-cover w-full h-full"
        path="code.gif"
        w={412}
        
        />
        </div>
    </div>
    {/* section 2  */}
    <div className="md:px-8 md:py-8 px-4 py-8 ">
        <div className="flex flex-col items-center gap-4 ">
            <h1 className="text-2xl md:text-3xl font-bold text-center">Focused Solutions for Key Business Needs.</h1>
            <p className="sm:max-w-3xl text-base sm:text-lg text-center">Accelerate your operations, safeguard your valuable data, and ensure seamless support with our innovative and tailored services designed to empower your business.</p>
            <div className="flex items-center  gap-16 sm:gap-8 sm:my-16 my-8 flex-col sm:flex-row
            w-full ">
                <div className="flex gap-8 items-center justify-center w-full  ">
                    <div className="bg-gray-300/60 md:w-16 lg:w-20 lg:h-20 sm:h-16 w-20 h-20 shadow-sm rounded-md flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowRight} rotation={270} size="xl" opacity={0.3} className="text-black -rotate-45 lg:text-4xl md:text-2xl text-4xl" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold">Speed</p>
                        <p className=" text-base text-wrap max-w-64">Lightning-fast solutions tailored to optimize your workflows.</p>
                    </div>
                </div>
                <div className="flex gap-8 items-center justify-center w-full ">
                    <div className="bg-gray-300/60 md:w-16 sm:h-16 lg:w-20 lg:h-20 w-20 h-20 shadow-sm rounded-md flex items-center justify-center">
                    <FontAwesomeIcon icon={faLock} size="xl" opacity={0.3} className="text-black md:text-2xl lg:text-4xl text-4xl shadow-md"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold">Security</p>
                        <p className=" text-base text-wrap max-w-64">Advanced security protocols to safeguard your sensitive information.</p>
                    </div>
                </div>
                <div className="flex gap-8 items-center justify-center w-full ">
                    <div className="bg-gray-300/60 md:w-16 sm:h-16 lg:w-20 lg:h-20 w-20 h-20 shadow-sm rounded-md flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} size="xl" opacity={0.3} className="text-black md:text-2xl lg:text-4xl text-4xl shadow-md "/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold">Support</p>
                        <p className=" text-base text-wrap max-w-64">24/7 support to keep your business running smoothly.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Slide/>
    {/* section 3 */}
    <Slide2/>
    <div className="flex gap-8 mb-16 p-8 flex-col sm:flex-row">
        <div className="sm:w-1/2 w-full h-64 flex justify-center sm:h-full sm:justify-start">
            <Image
            className="object-cover "
            path="pexels-tech.jpg"
            w={814}
            />
        </div>
        <div className="flex flex-col gap-4 justify-center sm:w-1/3">
            <h3 className=" text-[10px] text-neutral-500">SUPPORT WHEN YOU NEED IT</h3>
            <h1 className="lg:w-1/2 text-2xl font-bold">Our support team is
            your team</h1>
            <p className="font-medium text-wrap">At Dyvos, our support team is made up of a blend of banking professionals and growth experts dedicated to helping you. With a Dyvos account, you gain a team that genuinely understands your business and delivers tailored solutions for your financial operations.
            </p>
            <p className="font-medium text-wrap">We’re committed not just to resolving issues but to being your partner in fostering the growth and seamless management of your business.</p>
        </div>
    </div>
    <Slide3/>
    
    </>
  )
}

export default Homepage