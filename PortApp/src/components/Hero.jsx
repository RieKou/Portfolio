import Ava from '../assets/oyeng.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-gray-10">Halo, Saya Vanessa Lee!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Calon Front-End Developer yang Siap Berkembang Menjadi Yang Kompeten
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-400 text-white rounded-lg shadow-lg hover:bg-indigo-100 hover:text-black transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 group-hover:scale-105 transition-transform">
              <img
                src={Ava}
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-xl"
              />
            </div>
            <div className="absolute inset-0 rounded-full ring-2 ring-indigo-500 opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
