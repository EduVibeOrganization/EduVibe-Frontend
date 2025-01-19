import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-terms-conditions.css";

function AdminTermsConditions(){
    return (
        <div className="content-background">
          <div className="content-container">
            <CustomSidebarDX
              sidebarItems={<SidebarItemsAdmin />}
              mainBackgroundColor="#343A40"
              headerBackgroundColor="#23272B"
              headerTextColor="white"
              headerIconColor="#007BFF"
            />
            <div className="terms-content">
              <h1>Términos y Condiciones</h1>
              <p>
                Bienvenido a nuestra plataforma. Al usar nuestros servicios, aceptas los siguientes términos y condiciones. 
                Por favor, léelos detenidamente.
              </p>
    
              <section>
                <h2>1. Generalidades</h2>
                <p>
                  Estos términos aplican a todos los usuarios registrados, visitantes y
                  cualquier persona que acceda a la plataforma. Nos reservamos el derecho de
                  modificar estos términos en cualquier momento.
                </p>
              </section>
    
              <section>
                <h2>2. Uso de la Plataforma</h2>
                <p>
                  - Los usuarios deben proporcionar información real y actualizada al registrarse.<br />
                  - Está prohibido compartir tu cuenta con terceros.<br />
                  - Nos reservamos el derecho de suspender cuentas que violen las políticas de uso.
                </p>
              </section>
    
              <section>
                <h2>3. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido (cursos, textos, imágenes, videos) pertenece a sus respectivos creadores o a nuestra
                  plataforma. No está permitido reproducir, distribuir o vender este contenido sin autorización.
                </p>
              </section>
    
              <section>
                <h2>4. Pagos y Reembolsos</h2>
                <p>
                  - Todos los pagos se procesan en la moneda oficial (PEN).<br />
                  - Los reembolsos están sujetos a revisión y solo se otorgan bajo circunstancias específicas.<br />
                  - No se realizan reembolsos por cursos ya completados.
                </p>
              </section>
    
              <section>
                <h2>5. Grabaciones y Privacidad</h2>
                <p>
                  Las videoconferencias pueden ser grabadas para fines educativos. La información personal,
                  incluyendo métodos de autenticación y transacciones, es almacenada de forma segura.
                </p>
              </section>
    
              <section>
                <h2>6. Modificaciones</h2>
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los usuarios serán
                  notificados a través de correo electrónico o en la plataforma sobre cambios significativos.
                </p>
              </section>
    
              <section>
                <h2>7. Contacto</h2>
                <p>
                  Si tienes dudas o consultas sobre estos términos, contáctanos a través de nuestro formulario
                  de contacto o en el correo soporte@handin.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      );
}

export default AdminTermsConditions;