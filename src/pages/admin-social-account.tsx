import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { Profile } from "@/models/profile.dto";
import { UserService } from "@/services/user.service";
import { useState, useEffect } from "react";

import "../app/assets/styles/sidebar.css";
import "../app/assets/styles/admin.css";
import "../app/assets/styles/public.css";

function AdminSocialAccount(){
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
                    <h1 className="title">Usuarios Autenticados con Cuentas Sociales</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Correo Electrónico</th>
                        <th>Usuario</th>
                    </tr>
                    </thead>
                    <tbody>
                    {profiles.map((user) => (
                        <tr key={user.username}>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
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

export default AdminSocialAccount;