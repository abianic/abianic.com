import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Términos de Servicio' })

export default function TermsOfService() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Términos de Servicio
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-3">
            <p>Fecha de última actualización: 3 de Septiembre de 2025</p>

            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar Abianic (en adelante, "el Servicio"), usted acepta estar sujeto
              a estos Términos de Servicio ("Términos"). Si no está de acuerdo con alguna parte de
              los términos, no podrá utilizar el Servicio.
            </p>

            <h2>2. Descripción del Servicio</h2>
            <p>
              Abianic es una plataforma de programación de citas que se integra con Google Calendar
              para ayudar a los usuarios a gestionar sus reservas y disponibilidad. Las
              características incluyen la creación de eventos, la generación de enlaces de Google
              Meet y la sincronización del calendario.
            </p>

            <h2>3. Integración con Google Calendar</h2>
            <p>
              Para utilizar plenamente el Servicio, debe autorizar a Abianic a acceder a su cuenta
              de Google Calendar. Usted es responsable de gestionar este acceso y puede revocarlo en
              cualquier momento. Nuestra Política de Privacidad detalla qué información recopilamos
              y cómo la utilizamos.
            </p>

            <h2>4. Responsabilidades del Usuario</h2>
            <ul>
              <li>Usted es responsable de toda la actividad que ocurra en su cuenta.</li>
              <li>Debe proporcionar información precisa y completa al crear su cuenta.</li>
              <li>No debe utilizar el Servicio para ningún propósito ilegal o no autorizado.</li>
            </ul>

            <h2>5. Limitación de Responsabilidad</h2>
            <p>
              El Servicio se proporciona "tal cual". Abianic y sus proveedores no garantizan que el
              servicio sea ininterrumpido, seguro o libre de errores. En la máxima medida permitida
              por la ley, Abianic no será responsable de ningún daño indirecto, incidental,
              especial, consecuente o punitivo que resulte del uso del servicio.
            </p>

            <h2>6. Modificaciones a los Términos</h2>
            <p>
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Le
              notificaremos los cambios publicando los nuevos Términos en esta página. Se recomienda
              revisar esta página periódicamente para cualquier cambio.
            </p>

            <h2>7. Contacto</h2>
            <p>
              Si tiene alguna pregunta sobre estos Términos, contáctenos en:{' '}
              <a href="mailto:admin@abianic.com">admin@abianic.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
