import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import "../app/assets/styles/public.css";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";

function AdminBusiness() {
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
                    <h1>Admin Business</h1>
                </div>
            </div>
        </div>
    );
}

export default AdminBusiness;