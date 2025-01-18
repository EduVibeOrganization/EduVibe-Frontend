import { CustomSidebarAdmin } from "@/components/custom-sidebar-admin.component";
import "../app/assets/styles/public.css";

function AdminComplainsBook() {
    return (
        <div className="content-background">
            <div className="content-container">
                <CustomSidebarAdmin />
                <div>
                    <h1>Admin Complains Book</h1>
                </div>
            </div>
        </div>
    );
}

export default AdminComplainsBook;