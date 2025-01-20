import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-terms-conditions.css";

function AdminTermsConditions() {
  return (
      <div className="flex min-h-screen bg-gray-100 text-gray-900">
        <CustomSidebarDX
            sidebarItems={<SidebarItemsAdmin />}
            mainBackgroundColor="#343A40"
            headerBackgroundColor="#23272B"
            headerTextColor="white"
            headerIconColor="#007BFF"
        />

        <div className="flex-1 p-10 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-gray-700 mb-8">
            Bienvenido a nuestra plataforma. Al usar nuestros servicios, aceptas
            los siguientes términos y condiciones. Por favor, léelos
            detenidamente.
          </p>

          <div className="space-y-6">
            <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                1. Generalidades
              </h2>
              <p className="text-gray-600">
                Estos términos aplican a todos los usuarios registrados,
                visitantes y cualquier persona que acceda a la plataforma. Nos
                reservamos el derecho de modificar estos términos en cualquier
                momento.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                2. Uso de la Plataforma
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Los usuarios deben proporcionar información real y actualizada
                  al registrarse.
                </li>
                <li>Está prohibido compartir tu cuenta con terceros.</li>
                <li>
                  Nos reservamos el derecho de suspender cuentas que violen las
                  políticas de uso.
                </li>
              </ul>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                3. Propiedad Intelectual
              </h2>
              <p className="text-gray-600">
                Todo el contenido (cursos, textos, imágenes, videos) pertenece a
                sus respectivos creadores o a nuestra plataforma. No está
                permitido reproducir, distribuir o vender este contenido sin
                autorización.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                4. Pagos y Reembolsos
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Todos los pagos se procesan en la moneda oficial (PEN).</li>
                <li>
                  Los reembolsos están sujetos a revisión y solo se otorgan bajo
                  circunstancias específicas.
                </li>
                <li>No se realizan reembolsos por cursos ya completados.</li>
              </ul>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                5. Grabaciones y Privacidad
              </h2>
              <p className="text-gray-600">
                Las videoconferencias pueden ser grabadas para fines educativos.
                La información personal, incluyendo métodos de autenticación y
                transacciones, es almacenada de forma segura.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                6. Modificaciones
              </h2>
              <p className="text-gray-600">
                Nos reservamos el derecho de modificar estos términos en cualquier
                momento. Los usuarios serán notificados a través de correo
                electrónico o en la plataforma sobre cambios significativos.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-blue-500 mb-2">7. Contacto</h2>
              <p className="text-gray-600">
                Si tienes dudas o consultas sobre estos términos, contáctanos a
                través de nuestro formulario de contacto o en el correo{" "}
                <a
                    href="mailto:soporte@handin.com"
                    className="text-blue-600 underline"
                >
                  soporte@handin.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
  );
}

export default AdminTermsConditions;