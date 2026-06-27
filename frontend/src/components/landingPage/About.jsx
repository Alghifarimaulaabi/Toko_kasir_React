import heroImage from "../../assets/bg1.jpeg";

const About = () => {
  return (
    <div className="px-4 sm:px-6" id="tentang">
      {/* Judul */}
      <div className="mt-8 mb-6 text-center sm:mt-10 sm:mb-8">
        <h1 className="inline-block border-b-2 border-[#2FA084] bg-gradient-to-r from-[#2FA084] to-[#6FCF97] bg-clip-text pb-2 text-2xl font-bold text-transparent leading-tight sm:text-3xl">
          Tentang Kami
        </h1>
      </div>

      {/* Deskripsi */}
      <div className="mx-auto flex max-w-6xl flex-col items-center px-2 text-center">
        <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
          Kami hadir untuk membantu UMKM dalam mengelola bisnis mereka dengan
          sistem kasir yang modern, mudah digunakan, dan terjangkau. Dengan
          pengalaman melayani ratusan toko di Indonesia, kami memahami kebutuhan
          bisnis Anda.
        </p>
      </div>

      {/* Galeri */}
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3">
        <img
          src={heroImage}
          alt="Tentang Kami"
          className="h-48 w-full rounded-2xl object-cover shadow-lg transition duration-300 hover:scale-105 sm:h-56 md:h-64"
        />

        <img
          src={heroImage}
          alt="Tentang Kami"
          className="h-48 w-full rounded-2xl object-cover shadow-lg transition duration-300 hover:scale-105 sm:h-56 md:h-64"
        />

        <img
          src={heroImage}
          alt="Tentang Kami"
          className="h-48 w-full rounded-2xl object-cover shadow-lg transition duration-300 hover:scale-105 sm:h-56 md:h-64"
        />
      </div>
    </div>
  );
};

export default About;