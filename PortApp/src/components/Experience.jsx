import Sertif from '../assets/sertif.pdf';

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Pengalaman</h2>

      <div className="flex flex-col gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold">Freelance Front-End Web Developer</h3>
          <p className="text-gray-600 mt-2">
            2025-Present - Sudah mempelajari dan mengembangkan tampilan website
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">LnT BNCC 2024/2025</h3>
          <p className="text-gray-600 mt-2">
            2024-2025 - Learning and Training divisi Front-end Development
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">Sertifikat LnT BNCC 2024/2025</h3>

        <embed
          src={Sertif}
          type="application/pdf"
          width="100%"
          height="750px"
          className=""
        />

        <div className="mt-6">
          <a
            href={Sertif}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-800 transition"
          >
            Download Sertifikat
          </a>
        </div>
      </div>
    </section>
  );
}
