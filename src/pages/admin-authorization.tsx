import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { useEffect, useState } from "react";
import { UserService } from "@/services/user.service";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-auth.css";
import { Profile } from "@/models/profile.dto";

function AdminAuthorization() {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [selectedProfile, setSelectedProfile] = useState<Profile>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userService = new UserService();
        userService.getAllUsers().then((response) => {
            const profiles = response.map( profile => new Profile(
                profile.username,
                profile.email,
                profile.phoneNumber,
                profile.userRole
            )
            );
            setProfiles(profiles);
            setLoading(false);
        });
    }, []);

    if (loading) {
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
                    <div className="admin-auth-content">
                        <h1>Autenticación y Autorización</h1>
                        <p className="loading-text">Cargando usuarios...</p>
                    </div>
                </div>
            </div>
        );
    }

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
                <div className="admin-auth-content">
                    <h1>Autenticación y Autorización</h1>
                    <p className="warning-text">
                        ⚠️ En este módulo se pueden administrar y asignar permisos. Se recomienda precaución ante cualquier modificación.
                    </p>
                    <div className="user-list-section">
                        <h2>Usuarios</h2>
                        <ul className="user-list">
                            {profiles.map((user) => (
                                <li
                                    key={user.username}
                                    className={`user-item ${ selectedProfile?.username === user.username ? "selected" : ""}`}
                                    onClick={() => setSelectedProfile(user)}
                                >
                                    {user.username} - <strong>{user.role}</strong>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {selectedProfile && (
                        <div className="user-details">
                            <h3>Detalles del Usuario</h3>
                            <p><strong>Email:</strong> {selectedProfile.email} </p>
                            <p><strong>Nombre de Usuario:</strong> {selectedProfile.username}</p>
                            <p><strong>Teléfono:</strong> {selectedProfile.phoneNumber}</p>
                            <p><strong>Rol:</strong> {selectedProfile.role}</p>
                            <button
                                className="assign-permission-button"
                                onClick={() =>alert(`Permisos asignados a ${selectedProfile.username} : (${selectedProfile.role})`)}
                            >
                                Asignar Permisos
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminAuthorization;