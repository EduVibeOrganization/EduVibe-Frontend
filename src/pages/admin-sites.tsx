import { CustomSidebarDX } from "@/components/custom-sidebar-admin.component";
import "../app/assets/styles/public.css";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";

function AdminSite() {
    return (
        <div className="content-background">
            <div className="content-container">
                <CustomSidebarDX
                    sidebarItems={<SidebarItemsAdmin/>}
                    mainBackgroundColor="#343A40"
                    headerBackgroundColor="#23272B"
                    headerTextColor="white"
                    headerIconColor="#007BFF"
                />
                <div>
                    <h1>Admin Site</h1>
                </div>
            </div>
        </div>
    );
}

export default AdminSite;