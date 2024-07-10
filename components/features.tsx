import customsoftwareicon from '../public/static/icons/custom-software-icon.svg'
import mobileAppsIcon from '../public/static/icons/mobile-apps-icon.svg'
import websitesIcon from '../public/static/icons/websites-icon.svg'

const features = [
  {
    name: 'Software personalizado',
    description:
      'Entendemos que cada negocio es único, por eso ofrecemos soluciones de desarrollo de software personalizadas que se adaptan perfectamente a sus necesidades.',
    icon: customsoftwareicon,
  },
  {
    name: 'Aplicaciones móviles',
    description:
      'Trabajamos estrechamente con usted para transformar sus conceptos en aplicaciones atractivas, intuitivas y de alto rendimiento.',
    icon: mobileAppsIcon,
  },
  {
    name: 'Sitios web',
    description:
      'Diseñamos y desarrollamos sitios web que no sólo captan la atención, sino que también generan resultados tangibles.',
    icon: websitesIcon,
  },
]
const Features = () => {
  return (
    <div className="bg-abianicGray-700 py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            En Abianic, ofrecemos una gama completa de servicios tecnológicos diseñados para
            impulsar el éxito de su negocio.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-abianicWine-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features
