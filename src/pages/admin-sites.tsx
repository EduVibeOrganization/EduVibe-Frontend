import { CustomSidebarDX } from "@/components/custom-sidebar-admin.component";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";

import "../app/assets/styles/public.css";
import "../app/assets/styles/admin-sites.css";

const socialLinks = [
    {
      name: "Facebook",
      icon: "pi pi-facebook",
      url: "https://www.facebook.com/",
    },
    {
      name: "Twitter",
      icon: "pi pi-twitter",
      url: "https://www.twitter.com/",
    },
    {
      name: "Instagram",
      icon: "pi pi-instagram",
      url: "https://www.instagram.com/",
    },
    {
      name: "LinkedIn",
      icon: "pi pi-linkedin",
      url: "https://www.linkedin.com/",
    },
    {
      name: "YouTube",
      icon: "pi pi-youtube",
      url: "https://www.youtube.com/",
    },
  ];

function AdminSite() {
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
            <div className="sites-content">
              <h1>Redes Sociales</h1>
              <p>
                En esta sección encontrarás los enlaces a las redes sociales
                oficiales. Por favor, no alteres el contenido de esta página sin
                autorización.
              </p>
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <i className={`${link.icon}`} /> {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
}

export default AdminSite;