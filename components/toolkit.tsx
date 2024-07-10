// import SectionWrapper from '@/components/section-wrapper'
import Image from 'next/image'
import LaravelLogo from '../public/static/icons/laravel.svg'
import NextLogo from '../public/static/icons/nextjs.svg'
import NodeLogo from '../public/static/icons/nodejs.svg'
import TailwindLogo from '../public/static/icons/tailwind.svg'
import WordpressLogo from '../public/static/icons/wordpress.svg'
import AwsLogo from '../public/static/icons/aws.svg'
import PhpLogo from '../public/static/icons/php.svg'
import ReactLogo from '../public/static/icons/react.svg'

const features = [
  {
    icon: '/static/icons/wordpress.svg',
    title: 'Wordpress',
    desc: 'WordPress is an open source content management system (CMS).',
  },
  {
    icon: '/static/icons/nextjs.svg',
    title: 'Next.js',
    desc: 'Next.js is a React framework that gives you the building blocks for building web applications.',
  },
  {
    icon: '/static/icons/tailwind.svg',
    title: 'Tailwind CSS',
    desc: 'Tailwind CSS is basically a top-of-the-line CSS framework for creating user interfaces quickly.',
  },
  {
    icon: '/static/icons/nodejs.svg',
    title: 'Node.js',
    desc: 'Node.js is an open source, cross-platform, back-end JavaScript runtime environment.',
  },
  {
    icon: '/static/icons/vercel.svg',
    title: 'Vercel',
    desc: 'Vercel is a cloud platform that allows developers to host web applications.',
  },
  {
    icon: '/static/icons/figma.svg',
    title: 'Figma',
    desc: 'Figma is a web-based UI design and graphics editing application.',
  },
]

const ToolKit = () => {
  return (
    <div id="toolkit" className="bg-abianicGray-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Trabajamos con el mejor kit de herramientas.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              En Abianic, empleamos las herramientas más avanzadas y versátiles para desarrollar
              soluciones tecnológicas de alta calidad.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <PhpLogo className="max-h-12 w-full object-contain object-left" height={48} />
            <LaravelLogo className="max-h-12 w-full object-contain object-left" height={48} />
            <NodeLogo className="max-h-12 w-full object-contain object-left" height={48} />
            <NextLogo className="max-h-12 w-full object-contain object-left" height={48} />
            <ReactLogo className="max-h-12 w-full object-contain object-left" height={48} />
            <TailwindLogo className="max-h-12 w-full object-contain object-left" height={48} />
            <WordpressLogo className="max-h-12 w-full object-contain object-left" height={48} />
            <AwsLogo className="max-h-12 w-full object-contain object-left" height={48} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToolKit
