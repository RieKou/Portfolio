export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-500 mb-4">
          Feel free to reach out if you’re interested in collaborating or just want to connect.
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:vanessa15leev@gmail.com?subject=Hello Vanessa&body=Hi Vanessa,%0D%0A%0D%0AI would like to contact you regarding..."
            className="text-indigo-600 hover:underline"
          >
            vanessa15leev@gmail.com
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center items-end gap-4">
        <a
          href="https://instagram.com/_leevnessaa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-pink-600 hover:underline"
        >
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="inline"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
          Instagram
        </a>

        <a
          href="https://github.com/RieKou"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:underline"
        >
          <svg
            width="24"
            height="24"
            fill="currentColor"
            className="inline"
          >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.8c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
          </svg>
          GitHub
        </a>

        <a
          href="https://wa.me/6281372197726"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-emerald-500 hover:underline"
        >
          <svg
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 32 32"
            className="inline"
          >
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.11 2.37 7.13L4 29l7.13-2.37A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 21.5c-2.01 0-3.97-.59-5.62-1.7l-.4-.25-4.22 1.4 1.4-4.22-.25-.4A9.48 9.48 0 0 1 6.5 15c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5zm5.13-7.38c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.32 0 1.37.99 2.7 1.13 2.89.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z"/>
          </svg>
          Whatsapp
        </a>
      </div>
    </section>
  );
}
