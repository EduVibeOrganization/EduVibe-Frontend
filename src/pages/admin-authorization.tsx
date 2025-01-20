import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { useEffect, useState } from "react";
import { UserService } from "@/services/user.service";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-auth.css";
import "../app/assets/styles/admin.css";
import { Profile } from "@/models/profile.dto";
import { CustomButtonDX } from "@/components/custom-button-dx.component";

function AdminAuthorization() {
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [selectedProfile, setSelectedProfile] = useState<Profile>();

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
        });
    }, []);

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
                <main className="admin-content">
                    <div className="content">
                        <h1 className="title">Autenticación y Autorización</h1>
                        <div className="info"  style={{borderColor: "#007BFF"}}>
                            <p> En este módulo se pueden administrar y asignar permisos. Se recomienda precaución ante cualquier modificación. </p>
                        </div>
                        <div className="section">
                            <section>
                                <h2 className="subtitle">Usuarios</h2>
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
                            </section>
                            {selectedProfile && (
                                <section className="user-details">
                                    <h3 className="subtitle">Detalles del Usuario</h3>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Email</th>
                                                <th>Nombre de Usuario</th>
                                                <th>Teléfono</th>
                                                <th>Rol</th>
                                                <th>Asignar Permisos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{selectedProfile.email}</td>
                                                <td>{selectedProfile.username}</td>
                                                <td>{selectedProfile.phoneNumber}</td>
                                                <td>{selectedProfile.role}</td>
                                                <td><CustomButtonDX title="Asignar" color="#007BFF" size="small" onSubmit={() =>alert(`Permisos asignados a ${selectedProfile.username} : (${selectedProfile.role})`)}/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </section>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AdminAuthorization;