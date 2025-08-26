import image from '../assets/image.png';

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center">
        <img
          src={image}
          alt="About"
          className="w-100 rounded-2xl shadow-md"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
        <p className="text-gray-500 mb-4">
          Saya adalah seorang Front-End Web Developer dengan <strong className="text-gray-300">2 Tahun</strong> pengalaman dalam membangun aplikasi web yang responsif dan user-friendly.
        </p>
        <p className="text-gray-500">
          Saya memiliki keahlian dalam <strong className="text-gray-300">HTML, CSS, JavaScript, React, dan Tailwind CSS</strong>. Saya selalu bersemangat untuk belajar teknologi baru dan meningkatkan keterampilan saya.
        </p>
      </div>
    </section>
  );
}
