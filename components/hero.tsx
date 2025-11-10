import NavLink from '@/components/navlink'

const Hero = () => (
  <section>
    <div className="relative isolate overflow-hidden bg-white py-28">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-4xl space-y-5 text-center">
        <h1 className="mx-auto text-4xl font-extrabold text-abianicDarkBlue-900 sm:text-6xl">
          Crea y escala tu próxima idea de negocio más rápido
        </h1>
        <p className="mx-auto max-w-xl font-medium">
          Abianic te facilita la creación y el crecimiento de tus aplicaciones o cualquier idea de
          negocio.
        </p>
        <div className="flex items-center justify-center gap-x-3 text-sm font-medium">
          <a
            href="https://app.bookingoal.com/appointments/abianic"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button rounded-lg px-4 py-2.5 text-center text-white duration-150 "
          >
            Programe una llamada
          </a>
          <NavLink href="#services" className="border text-gray-700 hover:bg-gray-50" scroll={true}>
            Conoce nuestros servicios
          </NavLink>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
