import Link from 'next/link'
import ctaImage from '../public/static/images/cta-image.jpg'
import Image from 'next/image'

const CTA = () => {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cree modelos de negocio exitosos con nuestras soluciones TI
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Abianic, una empresa de desarrollo de software, ayuda a digitalizar las empresas
              centrándose en los desafíos y necesidades comerciales de los clientes.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Valoramos una cooperación estrecha y transparente, alentamos a nuestros clientes a
              participar activamente en el ciclo de vida del desarrollo del proyecto.
            </p>
            <div className="mt-10 flex">
              <Link
                href="https://app.bookingoal.com/appointments/abianic"
                className="gradient-button rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Programe una llamada <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={ctaImage}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                alt="Create successful business models with our IT solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
