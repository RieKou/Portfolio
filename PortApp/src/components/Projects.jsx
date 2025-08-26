import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"
import { Navigation, Autoplay } from "swiper/modules"

const projects = [
  { id: 1, title: "To-do Lists", desc: "Fungsi > Tampilan", href: "https://riekou-todolist.netlify.app/" },
  { id: 2, title: "Portfolio", desc: "Adalah laman ini", href: "#" },
  { id: 3, title: "Karya Utama Sukses [BETA]", desc: "Membantu usaha orang tua", href: "https://karyautamasukses.netlify.app/" },
  { id: 4, title: "Shu #1", desc: "Project (iseng) React pertama", href: "https://shu-profile.netlify.app/" },
  { id: 5, title: "BookLend", desc: "Aplikasi web peminjaman buku (kelompok)", href: "https://booklendweb.netlify.app/" },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16 relative">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.id}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-tr from-indigo-500 to-indigo-300 rounded-2xl shadow hover:shadow-lg transition p-4 h-full flex flex-col cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-200 mb-4">{p.desc}</p>
                <span className="mt-auto text-indigo-200 hover:underline">
                  View Project →
                </span>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
