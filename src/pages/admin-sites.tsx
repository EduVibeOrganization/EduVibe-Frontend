import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-sites.css";

const socialLinks = [
    {
        name: "Facebook",
        icon: "pi pi-facebook",
        url: "https://www.facebook.com/",
        color: "text-blue-600",
    },
    {
        name: "Twitter",
        icon: "pi pi-twitter",
        url: "https://www.twitter.com/",
        color: "text-gray-600",
    },
    {
        name: "Instagram",
        icon: "pi pi-instagram",
        url: "https://www.instagram.com/",
        color: "text-pink-500",
    },
    {
        name: "LinkedIn",
        icon: "pi pi-linkedin",
        url: "https://www.linkedin.com/",
        color: "text-blue-700",
    },
    {
        name: "YouTube",
        icon: "pi pi-youtube",
        url: "https://www.youtube.com/",
        color: "text-red-600",
    },
];

function AdminSite() {
    return (
        <div className="flex min-h-screen bg-gray-900 text-gray-900">
            {/* Sidebar */}
            <CustomSidebarDX
                sidebarItems={<SidebarItemsAdmin />}
                mainBackgroundColor="#343A40"
                headerBackgroundColor="#23272B"
                headerTextColor="white"
                headerIconColor="#007BFF"
            />

            {/* Main Content */}
            <div className="flex-1 p-10 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-blue-600 mb-4">Redes Sociales</h1>
                <p className="text-gray-700 mb-6">
                    En esta sección encontrarás los enlaces a las redes sociales oficiales.
                    Por favor, no alteres el contenido de esta página sin autorización.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors"
                        >
                            <i className={`${link.icon} text-2xl ${link.color}`} />
                            <span className="font-semibold text-gray-900">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminSite;