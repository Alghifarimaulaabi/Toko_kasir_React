import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#6FCF97] font-poppins overflow-y-auto">
                <div className="bg-white p-8 shadow-lg rounded-2xl w-80 h-[400px]">
        
        <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-[#007a5c] to-[#6FCF97] bg-clip-text text-transparent leading-tight">Toko Kasir</h2>

        <div className="flex justify-center">
    <div className="w-64 h-10 bg-[#bdbdbd] rounded-full relative flex items-center p-1 mb-3.5">

        <div className="w-1/2 h-full bg-[#eee] rounded-full absolute top-0 left-0 z-10 border-2 border-[#007a5c]"></div>

        <div className="w-1/2 flex justify-center items-center z-20 cursor-pointer">
            <i className="fa-solid fa-door-closed mr-2"></i>
            <h2 className="text-sm font-semibold">Login</h2>
        </div>

        <div className="w-1/2 flex justify-center items-center z-20 cursor-pointer">
            <a href="register.php" className="flex">
            <i className="fa-solid fa-user-plus mr-2"></i>
            <h2 className="text-sm font-semibold">Register</h2>
        </a>
        </div>

    </div>
</div>

        <form method="" className="space-y-4">

            <div className="flex items-center border rounded-lg px-3 py-2">
                <i className="fa-solid fa-envelope text-gray-400 mr-2"></i>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email"
                    className="w-full outline-none"
                    required
                />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2">
                <i className="fa-solid fa-lock text-gray-400 mr-2"></i>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="w-full outline-none"
                    required
                />
            </div>

            <Link to='/dashboard'>
            <button 
                type="submit" 
                className="w-full bg-[#007a5c] hover:bg-[#6FCF97] text-white py-2 rounded-lg transition
                6FCF97
                "
            >
                Login
            </button>
            </Link>

        </form>

        <div className="flex justify-center">
            <div className="d h-0.5 w-28 bg-gray-500 text-center mt-3.5"></div>
        </div>
        <p className="text-sm text-center mt-4">
            Belum punya akun? 
            <a href="register.php" className="text-blue-500 hover:underline">Register</a>
        </p>

    </div>

    <div className="w-72 h-72 fixed bottom-[-80px] right-[-120px] rounded-full bg-[#8adadc] opacity-70"></div>

    <div className="w-72 h-72 fixed top-[-80px] left-[-120px] rounded-full bg-[#e0e1dd] opacity-70 "></div>

   <div className="back absolute left-2 top-2.5 cursor-pointer bg-go rounded-2xl p-2 flex justify-center items-center">
    <Link to="/">
    <svg xmlns="http://www.w3.org/2000/svg" 
     width="24" height="24" 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     stroke-width="2" 
     stroke-linecap="round" 
     className="text-white"
     stroke-linejoin="round">
  <path d="M19 12H5"/>
  <path d="M12 19l-7-7 7-7"/>
</svg>
</Link>
</div>

</div>
    )
}

export default Login