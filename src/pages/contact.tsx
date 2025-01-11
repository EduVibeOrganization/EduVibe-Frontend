import React, { useState } from "react";
import Link from "next/link";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { CustomSideBar } from "@/components/custom-sidebar.component";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<{ success: boolean; message: string }>({
        success: false,
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                success: false,
                message: "Por favor, llena todos los campos.",
            });
            return;
        }

        setTimeout(() => {
            setStatus({
                success: true,
                message: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.",
            });
            setFormData({ name: "", email: "", message: "" });
        }, 1000);
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="hidden lg:block bg-white shadow-md border-none">
                <CustomSideBar />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col items-center p-6 lg:px-12">
                <header className="w-full max-w-4xl text-center mb-12">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Contacto</h1>
                    <p className="text-lg text-gray-700 mb-6">Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en ponerte en contacto con nosotros.</p>
                </header>

                {/* Contact form */}
                <main className="w-full max-w-4xl">
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6 border-t-4 border-cyan-600">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                                Nombre
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 text-gray-800"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                                Correo Electrónico
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 text-gray-800"
                                placeholder="Tu correo electrónico"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 text-gray-800"
                                placeholder="Escribe tu mensaje aquí"
                            />
                        </div>

                        {status.message && (
                            <div
                                className={`mt-4 p-4 text-center rounded-lg ${
                                    status.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }`}
                            >
                                <p>{status.message}</p>
                            </div>
                        )}

                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-8 py-3 text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 transition-colors duration-300 text-lg"
                            >
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </main>

                {/* Footer */}
                <footer className="mt-12 text-center">
                    <p className="text-gray-600">
                        ¿Volver al <Link href="/help-center" className="text-cyan-600 underline hover:text-cyan-700">Centro de Ayuda?</Link>
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default ContactPage;
