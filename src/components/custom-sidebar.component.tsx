import { useRouter } from "next/router";
import { SidebarItem } from "./sibebar-item.component";

export function CustomSideBar(){
    const navigator = useRouter();
    return (
        <div className="flex flex-col justify-center items-center h-full w-24 lg:w-48  bg-cyan-400 gap-7">
            <SidebarItem title="Home" icon="https://clipground.com/images/white-home-icon-transparent-png-6.png" onClick={() => navigator.push("/home-student")} />
            <SidebarItem title="Courses" icon="https://vectorified.com/images/course-icon-18.png" onClick={() => navigator.push("/courses")} />
            <SidebarItem title="Livestreams" icon="https://cdn3.iconfinder.com/data/icons/social-media-2590/68/117-512.png" onClick={() => navigator.push("/conference-creation")} />
            <SidebarItem title="Transactions" icon="https://static.thenounproject.com/png/1341083-200.png" onClick={() => navigator.push("/home-student")} />
            <SidebarItem title="Help Center" icon="https://static-00.iconduck.com/assets.00/help-circle-icon-1024x1024-8xws9u0o.png" onClick={() => navigator.push("/help-center")} />
            <SidebarItem title="Profile" icon="https://icon-library.com/images/profile-png-icon/profile-png-icon-1.jpg" onClick={() => navigator.push("/my-profile")} />
            <SidebarItem title="Admin" icon="https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-admin.png" onClick={() => navigator.push("/admin-authorization")} />
        </div>
    )
}