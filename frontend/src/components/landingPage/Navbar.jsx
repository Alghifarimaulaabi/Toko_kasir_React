import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>
            <nav className="bg-[#1F6F5F] text-white px-4 sm:px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
      {/* Logo */}
    <div className="font-bold text-base sm:text-xl">
        Toko Kasir
    </div>

    <ul className="hidden md:flex items-center gap-4 lg:gap-6">
        <li><a href="#" className="hover:text-gray-200 transition text-sm lg:text-base">Home</a></li>
        <li><a href="#tentang" className="hover:text-gray-200 transition text-sm lg:text-base">Tentang</a></li>
        <li><a href="#fitur" className="hover:text-gray-200 transition text-sm lg:text-base">Fitur</a></li>
        <li>
            <Link to="/login" className="bg-white text-[#1F6F5F] px-3 py-1.5 lg:px-4 rounded hover:bg-gray-200 transition text-sm lg:text-base">
                Login
            </Link>
        </li>
    </ul>
    
    <div className="md:hidden">
        <button id="mobile-menu-btn" className="text-white focus:outline-none">
            <i className="fas fa-bars text-xl"></i>
        </button>
    </div>
</nav>

<div id="mobile-menu" className="hidden md:hidden fixed top-16 left-0 w-full bg-[#1F6F5F] z-40 shadow-lg">
    <ul className="flex flex-col items-center py-4 gap-3">
        <li><a href="#" className="text-white hover:text-gray-200 transition py-2 px-4 block">Home</a></li>
        <li><a href="#tentang" className="text-white hover:text-gray-200 transition py-2 px-4 block">Tentang</a></li>
        <li><a href="#fitur" className="text-white hover:text-gray-200 transition py-2 px-4 block">Fitur</a></li>
        <li>
            <Link to="/login" className="bg-white text-[#1F6F5F] px-6 py-2 rounded hover:bg-gray-200 transition inline-block">
                Login
            </Link>
        </li>
    </ul>
</div>


        </>
    )
}

export default Navbar