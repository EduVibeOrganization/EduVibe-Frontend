import { CustomSidebarDX } from "@/components/custom-sidebar-admin.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { useState } from "react";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-privacy-policy.css";

const Policies = [
    "Los usuarios deben proporcionar un correo electrónico válido y real.",
    "Las videoconferencias realizadas en la plataforma pueden ser grabadas para referencia futura.",
    "Todas las transacciones realizadas en la aplicación se almacenan para auditoría y análisis.",
    "Las contraseñas de los usuarios están protegidas mediante encriptación de alta seguridad.",
    "Se registra el método de autenticación utilizado (Google, Facebook, etc.).",
    "Los cursos comprados se asocian al historial del usuario para acceso permanente.",
    "Los datos de navegación, como tiempo en un curso, se almacenan para mejorar la experiencia del usuario.",
    "Las reseñas y calificaciones realizadas en los cursos se guardan junto con el usuario que las realizó.",
    "La información de pago no se almacena en la aplicación, pero puede ser procesada por proveedores externos certificados.",
    "Los datos de los usuarios no se comparten con terceros, salvo para cumplir con la prestación del servicio.",
  ];

function AdminPrivacyPolicy(){
    const [policies, setPolicies] = useState(Policies);

  const handleEdit = () => {
    alert("Funcionalidad de edición aún no implementada.");
  };

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
        <div className="privacy-policy-content">
          <h1>Política de Privacidad</h1>
          <p>A continuación, se detallan las políticas de privacidad actuales:</p>
          <ul>
            {policies.map((policy, index) => (
              <li key={index}>{policy}</li>
            ))}
          </ul>
          <button className="edit-button" onClick={handleEdit}>
            Editar Políticas
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPrivacyPolicy;