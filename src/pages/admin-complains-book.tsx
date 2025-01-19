import { CustomSidebarDX } from "@/components/custom-sidebar-admin.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { Profile } from "@/models/profile.dto";
import { UserService } from "@/services/user.service";
import { useState, useEffect } from "react";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-complains-book.css";

function AdminComplainsBook() {
    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        const userService = new UserService();
        userService.getAllUsers().then((response) => {
            const profiles = response.map(
            (profile: any) =>
                new Profile(
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
            <div className="complaints-content">
                <h1>Libro de Reclamaciones</h1>
                <table className="complaints-table">
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Rol</th>
                        <th>Reclamo</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.length > 0 ? (
                    profiles.map((profile, index) => (
                        <tr key={index}>
                            <td>{profile.username}</td>
                            <td>{profile.email}</td>
                            <td>{profile.phoneNumber}</td>
                            <td>{profile.role}</td>
                            <td>Mal servicio</td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan={4} className="no-data">
                        No hay reclamaciones disponibles.
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default AdminComplainsBook;