
import { Carousel } from "primereact/carousel";
import { useRouter } from "next/navigation";
import "../app/globals.css";
import "../app/assets/styles/public.css";
import { CustomSideBar } from "@/components/custom-sidebar.component";
import { Footer } from "@/components/custom-footer.component";
import { CustomNavBar } from "@/components/custom-navbar.component";
import { useEffect, useState } from "react";
import { CategoryService } from "@/services/ category.service";
import { CustomSidebarDX } from "@/components/custom-sidebar-dx.component";
import { SidebarItemsStudent } from "@/components/sidebar-items-student.component";

function HomeStudent() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [categoryService] = useState(new CategoryService());
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("token");
      setIsAuthenticated(token !== null);
    }
    categoryService.getCategories().then((response: any) => {
      setCategories(response.data);
    });
  }, []);
  const features = [
    {
      title: "Aprendizaje Eficiente",
      description:
        "Accede a contenidos actualizados y herramientas modernas para aprender de manera práctica y efectiva.",
    },
    {
      title: "Conexión Global",
      description: "Aprende con profesores y estudiantes de todo el mundo.",
    },
    {
      title: "Interacción Directa",
      description: "Participa en clases en vivo y resuelve tus dudas en tiempo real.",
    },
  ];

  const testimonials = [
    {
      name: "Ana",
      role: "Analista de Datos",
      image: "/images/m1.jpg",
    },
    {
      name: "Pablo",
      role: "Diseñador UX/UI",
      image: "/images/h.jpg",
    },
    {
      name: "Daniela",
      role: "Programadora",
      image: "/images/m2.jpg",
    },
  ];

  const courses = [
    {
      title: "Curso de React Avanzado",
      description: "Domina React con los mejores proyectos y ejercicios.",
      image: "/images/course.jpg",
    },
    {
      title: "Diseño UI/UX desde Cero",
      description: "Aprende los principios del diseño centrado en el usuario.",
      image: "/images/course.jpg",
    },
    {
      title: "Python para Data Science",
      description: "Explora el mundo del análisis de datos con Python.",
      image: "/images/course.jpg",
    },
    {
      title: "Introducción a Flutter",
      description: "Crea aplicaciones móviles multiplataforma fácilmente.",
      image: "/images/course.jpg",
    },
  ];

  const courseTemplate = (course: { title: string; description: string; image: string }) => (
    <div className="text-center p-4 course-item group relative">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform group-hover:brightness-75"
        />
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="bg-[#23A8E1] text-white py-2 px-4 rounded-md hover:bg-[#89CAE9] transition-colors"
            onClick={() => router.push("/sign-in/")}
          >
            Descubre más
          </button>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.description}</p>
    </div>
  );

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
        <div className="flex-1 overflow-y-auto">
          <CustomNavBar categories={categories} isAuthenticated={isAuthenticated} />
            <div className="bg-[#23A8E1] text-white p-16 lg:p-24 relative overflow-hidden">
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center">
                <div className="max-w-xl z-10 lg:ml-0 lg:mr-8 mb-8 lg:mb-0">
                  <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
                    Alcanza tus metas con{" "}
                    <span className="text-yellow-300">Handin</span>
                  </h1>
                  <p className="text-lg lg:text-xl mb-8">
                    Si piensas que la tecnología es difícil, es porque no conoces
                    Eduvibe, la plataforma más obsesionada con la calidad de los
                    cursos. Por eso en español <b>#NadieExplicaMejor</b> que Handin.
                  </p>
                  <button
                    className="bg-black text-white py-4 px-10 rounded-lg transition-colors"
                    onClick={() => router.push("/courses")}
                  >
                    Comienza ahora
                  </button>
                </div>
                <div className="flex-shrink-0 w-full lg:w-1/2">
                  <img
                    src="/images/study.png"
                    alt="Imagen hero"
                    className="w-full h-auto object-cover lg:max-w-full"
                  />
                </div>
              </div>
            </div>
            {/* Features Section */}
            <section className="w-full bg-gray-50 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
                  Explora <span className="text-[#23A8E1]">las increíbles</span>{" "}
                  características de <span className="text-yellow-300">Handin</span> y
                  transforma tu aprendizaje
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex-shrink-0 bg-[#23A8E1] p-4 rounded-full mb-4">
                        <i
                          className={`pi ${
                            index === 0
                              ? "pi-book"
                              : index === 1
                              ? "pi-globe"
                              : "pi-comments"
                          } text-white text-2xl`}
                        ></i>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Recommended Courses Carousel */}
            <section className="bg-gray-200 py-12">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-4 text-[#23A8E1]">
                  ¡Impulsa tu carrera con nuestros Cursos Recomendados!
                </h2>
                <Carousel
                  value={courses}
                  numVisible={3}
                  numScroll={1}
                  circular
                  autoplayInterval={3000}
                  itemTemplate={courseTemplate}
                  className="p-carousel-custom"
                />
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-12">
              <div className="max-w-6xl mx-auto px-4">
                <div className="text-left mb-16">
                  <h2 className="text-3xl font-bold text-black mb-2">
                    Historias de Éxito de Nuestros Estudiantes
                  </h2>
                  <p className="text-lg text-gray-600">
                    Más del 77% de nuestros estudiantes han transformado sus vidas
                    profesionales, logrando nuevos empleos, ascensos y habilidades
                    valiosas.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {testimonials.map((student, index) => (
                    <div
                      key={index}
                      className="relative bg-gray-100 p-3 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                        <img
                          src={student.image}
                          alt={`${student.name} - ${student.role}`}
                          className="w-32 h-32 rounded-full object-cover border-4 border-[#23A8E1] shadow-md"
                        />
                      </div>

                      <div className="pt-16">
                        <h3 className="text-lg font-medium text-gray-800 mb-1">
                          {student.role}
                        </h3>
                        <p className="text-sm text-gray-600">{student.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <Footer />
          </div>
      </div>
    </div>
  );
}

export default HomeStudent;
