import HeroImage from "../../assets/bg1.jpeg"

const Hero = () => {
    return (
        <>
        {/* Header */}
<header className="fade-up pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* kiri */}
        <div className="md:w-1/2 text-center md:text-left px-2 sm:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2FA084] to-[#6FCF97] bg-clip-text text-transparent leading-tight">
                Web Toko Kasir Untuk Usaha Anda
            </h1>

            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
                Kelola penjualan, produk, dan transaksi dengan mudah menggunakan sistem kasir modern yang cepat dan efisien.
            </p>

            <div className="flex justify-center md:justify-start gap-3 mt-5 sm:mt-6">
                <a href="login.php">
                    <button className="bg-gradient-to-r from-[#2FA084] to-[#6FCF97] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold hover:shadow-lg transition text-sm sm:text-base">
                        Get Start
                    </button>
                </a>
                <button className="border-2 border-[#2FA084] text-[#2FA084] px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold bg-white hover:bg-[#2FA084] hover:text-white transition text-sm sm:text-base">
                    Pelajari
                </button>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 items-center mt-4 italic text-gray-500 text-xs sm:text-sm">
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-user-check"></i>
                    <p>50k Pengguna Aktif</p>
                </div>
                <div className="flex items-center gap-1">
                    <i className="fa-solid fa-store"></i>
                    <p>500 UMKM Terbantu</p>
                </div>
            </div>
        </div>

        {/* Kanan */}
         <div class="md:w-1/2 flex justify-center px-4">
            <img src={HeroImage} 
                 alt="Kasir App"
                 class="w-full max-w-[280px] sm:max-w-sm h-48 sm:h-56 md:h-64 object-cover rounded-2xl shadow-lg transform hover:scale-105 transition duration-300" />
        </div>
    </div>
</header>

        </>
    )
}

export default Hero