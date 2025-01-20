import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { Profile } from "@/models/profile.dto";
import { UserService } from "@/services/user.service";
import { useState, useEffect } from "react";

import "../app/assets/styles/sidebar.css";
import "../app/assets/styles/admin.css";
import "../app/assets/styles/public.css";
import { CustomButtonDX } from "@/components/custom-button-dx.component";

function AdminAccount() {
    const [profiles, setProfiles] = useState<Profile[]>([]);

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
                        <h1 className="title">Gestión de Cuentas</h1>
                        <div className="info"  style={{borderColor: "#007BFF"}}>
                            <p> Este módulo está destinado a desarrolladores. Se recomienda que otros usuarios no realicen cambios en esta sección. </p>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Email</th>
                                    <th>Teléfono</th>
                                    <th>Rol</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {profiles.map((user) => (
                                <tr key={user.username}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.role}</td>
                                    <td className="flex gap-3">
                                        <CustomButtonDX title="Modificar" size="small" color="#6c757d" onSubmit={() => alert("No implementado aún")}/>
                                        <CustomButtonDX title="Eliminar" size="small" color="#dc3545" onSubmit={() => alert("No implementado aún")}/>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AdminAccount;