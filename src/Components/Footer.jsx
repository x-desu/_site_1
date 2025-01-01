
const Footer = () => {
  return (
    <>
    <div className="bg-neutral-950 flex  text-white px-8 py-16  justify-between">
        <div className="flex flex-col gap-2  text-sm ">
            <h1 className="text-[#50555E] hover:text-gray-300 text-base sm:text-sm mb-4">About</h1>
            <span className="sm:text-xs text-sm">Customers</span>
            <span className="sm:text-xs text-sm">Company</span>
        </div>
        <div className="flex flex-col gap-2 text-sm">
            <h1 className="text-[#50555E] hover:text-gray-300 text-base sm:text-sm mb-4">Support</h1>
            <span className="sm:text-xs text-sm">Guides</span>
            <span className="sm:text-xs text-sm">Help</span>
        </div>
        <div className="flex flex-col gap-2 text-sm">
            <h1 className="text-[#50555E] hover:text-gray-300 text-base sm:text-sm mb-4">Follow</h1>
            <span className="sm:text-xs text-sm hover:text-bl">Linkedin</span>
            <span className="sm:text-xs text-sm">Instagram</span>
        </div>
        <div className="flex flex-col gap-2 text-sm">
            <h1 className="text-[#50555E] hover:text-gray-300 text-base sm:text-sm mb-4">Contact</h1>
            <span className="sm:text-xs text-sm">45489478465</span>
            <span className="sm:text-xs text-sm">help@help.com</span>
        </div>

    </div>
    <footer className="bg-neutral-950  text-white p-8">
  <div className="flex flex-col items-center">
    {/* First section: Quote */}
    <div className="text-center mb-4">
      <p className="text-lg font-normal ">Great things start small.</p>
    </div>
    
    {/* Second section: Copyright */}
    <div className="text-sm text-center text-gray-400">
      <p>&copy; 2024 Dyvos. All rights reserved.</p>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer