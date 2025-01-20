import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
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

function AdminPrivacyPolicy() {
    const [policies, setPolicies] = useState(Policies);
    const [isEditing, setIsEditing] = useState(false);
    const [editedPolicies, setEditedPolicies] = useState([...Policies]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setPolicies(editedPolicies);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedPolicies([...policies]);
        setIsEditing(false);
    };

    const handlePolicyChange = (index: number, newValue: string) => {
        const updatedPolicies = [...editedPolicies];
        updatedPolicies[index] = newValue;
        setEditedPolicies(updatedPolicies);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <CustomSidebarDX
                sidebarItems={<SidebarItemsAdmin />}
                mainBackgroundColor="#343A40"
                headerBackgroundColor="#23272B"
                headerTextColor="white"
                headerIconColor="#007BFF"
            />

            <div className="flex-1 p-10">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-blue-600 mb-4">
                        Política de Privacidad
                    </h1>
                    <p className="text-gray-700 mb-6">
                        A continuación, se detallan las políticas de privacidad actuales:
                    </p>

                    {isEditing ? (
                        <div className="space-y-4">
                            {editedPolicies.map((policy, index) => (
                                <div key={index} className="flex items-center space-x-4">
                  <textarea
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={policy}
                      onChange={(e) =>
                          handlePolicyChange(index, e.target.value)
                      }
                  />
                                </div>
                            ))}
                            <div className="flex space-x-4 mt-6">
                                <button
                                    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition-all"
                                    onClick={handleSave}
                                >
                                    Guardar
                                </button>
                                <button
                                    className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition-all"
                                    onClick={handleCancel}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <ul className="list-disc list-inside space-y-4 text-gray-600">
                            {policies.map((policy, index) => (
                                <li key={index}>{policy}</li>
                            ))}
                        </ul>
                    )}

                    {!isEditing && (
                        <button
                            className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition-all"
                            onClick={handleEdit}
                        >
                            Editar Políticas
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminPrivacyPolicy;