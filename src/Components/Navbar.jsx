import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="flex justify-between  bg-neutral-950 text-slate-100 px-4 py-4 sm:py-2 md:px-8 md:py-4">
       <div className="flex  gap-4 sm:gap-8 items-center">
        <Link to="/" className="text-2xl sm:text-xl">D<span className="text-[#0BCE5A]">y</span>vos</Link>
        <Link to="">blogs</Link>
       </div>
       <Link to="/about">About</Link>
    </header>
  )
}

export default Navbar