
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserService } from '../services/user.service';
import { Profile } from "../models/profile.dto";
import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsStudent } from "@/components/sidebar-items-student.component";
function MyProfile(){
    const navigator = useRouter();
    const [userService] = useState<UserService>(new UserService());
    const [profile, setProfile] = useState<Profile>({ username: "", email: "", phoneNumber: "", role: "" });
    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigator.push("/sign-in");
        }
        const id = sessionStorage.getItem("id");
        if (id) {
            userService.getUserById(Number(id)).then((response) => {
                const role = response.data.userRole;
                const username = response.data.username;
                const email = response.data.email;
                const phoneNumber = response.data.phoneNumber;
                setProfile({ username, email, phoneNumber, role });
            });
        }

    },[]);

    const user = {
        name: "Pepito Perez",
        email: "pepitoperez@gmail.com",
        phone: "+51 987 654 321",
        memberSince: 2022,
        completedCourses: 12,
        avatar: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
        stats: {
            coursesCompleted: 12,
            exercisesSolved: 20,
            topicsResolved: 5,
            postsInForum: 15,
        },
        transactions: [
            {
                id: "1024307701",
                date: "11 - 12 - 2024",
                method: "Yape",
                amount: "S/ 15",
            },
            {
                id: "1024307702",
                date: "11 - 12 - 2024",
                method: "Yape",
                amount: "S/ 15",
            },
        ],
    };
    return (
        <div className="content-background">
            <div className="content-container">
                <CustomSidebarDX
                    sidebarItems={<SidebarItemsStudent />}
                    mainBackgroundColor="#25A0D2"
                    headerBackgroundColor="#0D556E"
                    headerTextColor="white"
                    headerIconColor="#007BFF"
                />
                {/* Main Content */}
                <main className="flex-1 p-6 max-w-7xl w-full mx-auto mt-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Profile Card */}
                        <div className="col-span-1 bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
                            <div className="flex flex-col items-center">
                                <img
                                    src={user.avatar}
                                    alt="User Avatar"
                                    className="w-24 h-24 rounded-full shadow-lg"
                                />
                                <h2 className="mt-4 text-xl font-bold text-gray-800">{profile.username}</h2>
                                <p className="text-sm text-gray-500">{profile.email}</p>
                                <p className="text-sm text-gray-500">{profile.phoneNumber}</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    {profile.role.charAt(0).toUpperCase() + profile.role.slice(1).toLowerCase()}
                                </p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-medium">{user.completedCourses}</span> cursos
                                    completados
                                </p>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                <h2 className="text-3xl font-bold">{user.stats.coursesCompleted}</h2>
                                <p className="mt-2 text-sm font-medium uppercase">Cursos Finalizados</p>
                            </div>
                            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                <h2 className="text-3xl font-bold">{user.stats.exercisesSolved}</h2>
                                <p className="mt-2 text-sm font-medium uppercase">Ejercicios Resueltos</p>
                            </div>
                            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-center py-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                <h2 className="text-3xl font-bold">{user.stats.topicsResolved}</h2>
                                <p className="mt-2 text-sm font-medium uppercase">Tópicos Resueltos</p>
                            </div>
                            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-center py-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                <h2 className="text-3xl font-bold">{user.stats.postsInForum}</h2>
                                <p className="mt-2 text-sm font-medium uppercase">Posts en el Foro</p>
                            </div>
                        </div>
                    </div>

                    {/* Transactions Table */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-extrabold text-blue-700 mb-2">Historial de Transacciones</h2>
                        <p className="text-gray-600 mb-4 text-sm">
                            Información de tus pagos y suscripciones.
                        </p>
                        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-blue-100">
                            <tr>
                                <th className="py-3 px-4 font-semibold text-gray-700">ID Movimiento</th>
                                <th className="py-3 px-4 font-semibold text-gray-700">Fecha y Hora</th>
                                <th className="py-3 px-4 font-semibold text-gray-700">Método</th>
                                <th className="py-3 px-4 font-semibold text-gray-700">Monto</th>
                            </tr>
                            </thead>
                            <tbody>
                            {user.transactions.map((transaction, index) => (
                                <tr
                                    key={index}
                                    className={
                                        index % 2 === 0
                                            ? "bg-gray-50 hover:bg-blue-50"
                                            : "bg-white hover:bg-blue-50"
                                    }
                                >
                                    <td className="py-3 px-4 text-gray-800">{transaction.id}</td>
                                    <td className="py-3 px-4 text-gray-800">{transaction.date}</td>
                                    <td className="py-3 px-4 text-gray-800">{transaction.method}</td>
                                    <td className="py-3 px-4 text-gray-800">{transaction.amount}</td>
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
export default MyProfile;
