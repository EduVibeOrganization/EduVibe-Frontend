import { CustomSidebarDX } from "@/components/custom-sidebar-admin.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { Profile } from "@/models/profile.dto";
import { UserService } from "@/services/user.service";
import { useState, useEffect } from "react";

import "../app/assets/styles/sidebar.css";
import "../app/assets/styles/admin-account.css";
import "../app/assets/styles/public.css";

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
            <div className="accounts-content">
                <h1>Gestión de Cuentas</h1>
                <p className="info-text">
                Este módulo está destinado a desarrolladores. Se recomienda que otros usuarios no realicen cambios en esta sección.
                </p>
                <table className="accounts-table">
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
                        <td>
                            <button className="action-button" disabled>Modificar</button>
                            <button className="action-button delete-button" disabled>Eliminar</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default AdminAccount;