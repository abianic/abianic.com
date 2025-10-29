import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Política de Privacidad' })

export default function PrivacyPolicy() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Política de Privacidad
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-3">
            <h2>Recopilación de Información de Google</h2>
            <p>
              Nuestra aplicación, Abianic, solicita acceso a tu Google Calendar con los siguientes
              propósitos:
            </p>
            <ul>
              <li>Crear eventos para las citas y reservas generadas en Abianic.</li>
              <li>Generar enlaces de Google Meet para citas virtuales.</li>
            </ul>

            <h2>Almacenamiento de Datos</h2>
            <p>
              Para poder operar en tu nombre, almacenamos de forma segura los tokens de acceso que
              nos proporcionas. No almacenamos ninguna otra información personal de tu cuenta de
              Google en nuestros servidores.
            </p>

            <h2>Revocación de Acceso</h2>
            <p>
              Puedes revocar el acceso de Abianic a tu cuenta de Google en cualquier momento desde
              el panel de seguridad de Google:{' '}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://myaccount.google.com/permissions
              </a>
              .
            </p>

            <h2>Uso de la Información</h2>
            <p>
              La información obtenida a través de la API de Google se utiliza exclusivamente para
              las funcionalidades descritas y no se compartirá con terceros. El uso de la
              información recibida de las APIs de Google se adherirá a la{' '}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Datos de Usuario de los Servicios API de Google
              </a>
              , incluyendo los requisitos de Uso Limitado.
            </p>

            <h2>Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre nuestras prácticas de privacidad, no dudes en
              contactarnos en: <a href="mailto:admin@abianic.com">admin@abianic.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
