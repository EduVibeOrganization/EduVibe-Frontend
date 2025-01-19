import { CustomSidebarDX } from "@/components/custom-sidebar-admin.component";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { SidebarItemsAdmin } from "@/components/sidebar-items-admin.component";
import Link from "next/link";

function AdminQA(){
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
                <div className="flex-1 flex flex-col items-center p-6 lg:px-12">
                <header className="w-full max-w-4xl text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">Centro de Ayuda para Estudiantes</h1>
                    <p className="text-gray-600 mb-6">Tu lugar para soporte, preguntas frecuentes y más recursos.</p>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            placeholder="Buscar temas de ayuda..."
                        />
                        <button className="absolute top-0 right-0 mt-3 mr-4 text-cyan-500">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </header>

                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/help-center"
                        className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-semibold text-lg py-2 px-6 border border-cyan-600 rounded-lg transition-colors duration-300"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Regresar al Centro de Ayuda
                    </Link>
                </div>

                {/* Frequently Asked Questions */}
                <main className="w-full max-w-4xl">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Preguntas Frecuentes</h2>
                        <ul className="space-y-6">
                            <li>
                                <h3 className="text-lg font-medium text-cyan-600">¿Cómo me inscribo en un curso?</h3>
                                <p className="text-gray-600">
                                    Ve a la sección "Mis Cursos", selecciona el curso que deseas y haz clic en "Inscribirme".
                                </p>
                            </li>
                            <li>
                                <h3 className="text-lg font-medium text-cyan-600">¿Cómo sigo el progreso del curso?</h3>
                                <p className="text-gray-600">
                                    Dentro del curso, podrás ver tu progreso en la barra de avance, que te mostrará qué porcentaje has completado.
                                </p>
                            </li>
                        </ul>
                    </section>

                    {/* Help Categories */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Categorías de Ayuda</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                                <h3 className="text-cyan-600 font-semibold text-lg mb-3">Inscripción en Cursos</h3>
                                <p className="text-gray-600 text-sm">Todo lo que necesitas saber para inscribirte en cursos.</p>
                                <button className="mt-4 text-cyan-600 underline">Ver más</button>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                                <h3 className="text-cyan-600 font-semibold text-lg mb-3">Progreso y Calificaciones</h3>
                                <p className="text-gray-600 text-sm">Consulta tu progreso y cómo ver tus calificaciones.</p>
                                <button className="mt-4 text-cyan-600 underline">Ver más</button>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                                <h3 className="text-cyan-600 font-semibold text-lg mb-3">Foros de Discusión</h3>
                                <p className="text-gray-600 text-sm">Conoce cómo participar en foros y discutir temas del curso.</p>
                                <button className="mt-4 text-cyan-600 underline">Ver más</button>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                                <h3 className="text-cyan-600 font-semibold text-lg mb-3">Soporte Técnico</h3>
                                <p className="text-gray-600 text-sm">Soluciona problemas técnicos frecuentes como acceso y errores.</p>
                                <button className="mt-4 text-cyan-600 underline">Ver más</button>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="mt-12 text-center">
                    <p className="text-gray-600">
                        ¿Necesitas más ayuda?{" "}
                        <a href="/contact" className="text-cyan-600 underline">
                            Contáctanos
                        </a>
                    </p>
                </footer>
            </div>
            </div>
        </div>
    );
}

export default AdminQA;