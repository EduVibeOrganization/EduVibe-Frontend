import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import { UserService } from "@/services/user.service";
import { useState, useEffect } from "react";
import { Profile } from "@/models/profile.dto";
import "../app/assets/styles/public.css";
import "../app/assets/styles/admin.css";

function AdminContact(){
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
                        <h1 className="title">Formulario de Contacto</h1>
                        <div className="info"  style={{borderColor: "#007BFF"}}>
                            <p> Esta sección muestra la información de contacto enviada por los usuarios. </p>
                        </div>
                        <section className="section">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Correo Electrónico</th>
                                        <th>Teléfono</th>
                                        <th>Rol</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        {profiles.map((user) => (
                                            <tr key={user.username}>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phoneNumber}</td>
                                                <td>{user.role}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                            </table>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AdminContact;