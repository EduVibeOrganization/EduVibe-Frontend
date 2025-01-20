import { CustomNavBar } from "@/components/custom-navbar.component";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { CreateCourseItem } from "@/components/create-course-item";
import { InstructorService } from "@/services/instructor.service";
import { CustomInputText } from "@/components/custom-input-text.component";
import { ConvertImageService } from "@/services/convert-image.service";
import { CategoryService } from "@/services/ category.service";
import { CreateInstructorDTO } from "@/models/create-instructor.dto";
import { CourseRequestDTO } from "@/models/course-request.dto";
import { CourseService } from "@/services/course.service";
import { CustomButton } from "@/components/custom-button.component";
import { error } from "console";

function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [price, setPrice] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [instructorBio, setInstructorBio] = useState("");
  const [instructorDegree, setInstructorDegree] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [categoryService] = useState(new CategoryService());
  const [instructorService] = useState(new InstructorService());
  const [convertImageService] = useState(new ConvertImageService());
  const [courseService] = useState(new CourseService());
  const [categories, setCategories] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    categoryService.getCategories().then((response: any) => {
      setCategories(response.data);
    });
    if (typeof window !== "undefined") {
      const token = Cookies.get("token");
      setIsAuthenticated(token !== null);
    }
  }, []);

  async function convertToUrl(file: File) {
    await convertImageService.convertToUrl(file).then((response: any) => {
      setImageUrl(response.data.image.url);
    });
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      convertToUrl(file!);
    }
  };

  async function onSubmit(){
    const createInstructor = new CreateInstructorDTO(instructorName, instructorBio, instructorDegree);
    const userId = Cookies.get("id");
    const courseRequest = new CourseRequestDTO(title, description, categoryId,price,subtitle, duration, imageUrl, difficulty, startDate, endDate, Number(userId));
    try{
        await instructorService.createInstructor(createInstructor);
    } catch (error){
        alert("Se ha producido un error al crear al instructor")
    }
    await courseService.createCourse(courseRequest);


  }

  return (
    <div className="page-size">
      <CustomNavBar categories={categories} isAuthenticated={isAuthenticated} />
      <section className="mt-20 flex flex-col justify-center items-center gap-5">
        <CreateCourseItem
          title="Título"
          description="Ingresa el título de tu curso"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e)}
        />
        <CreateCourseItem
          title="Descripción del curso"
          description="Ingresa la descripción de tu curso"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e)}
        />

      <CreateCourseItem
          title="Subtitulo del curso"
          description="Ingresa el subtitlo de tu curso"
          placeholder="Subtitulo"
          value={subtitle}
          onChange={(e) => setSubtitle(e)}
        />
        <div className="flex flex-col lg:flex-row gap-5 mt-10">
          <CreateCourseItem
            title="Duración"
            description="Ingresa la duración de tu curso"
            placeholder="Duración"
            value={duration}
            onChange={(e) => setDuration(Number(e))} 
          />
          <CreateCourseItem
            title="Nivel de dificultad"
            description="Básico, Intermedio, Avanzado"
            placeholder="Dificultad"
            value={difficulty}
            onChange={(e) => setDifficulty(e)}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mt-10">
            <h1 className="font-bold text-3xl">Fecha de inicio</h1>
            <input
                type="date"
                className="border-2 border-gray-300 rounded-lg p-2"
                onChange={(e) => setStartDate(e.target.value)}
            />
            <h1 className="font-bold text-3xl">Fecha de finalización</h1>
            <input
                type="date"
                className="border-2 border-gray-300 rounded-lg p-2"
                onChange={(e) => setEndDate(e.target.value)}
                />
        </div>
        <CreateCourseItem
          title="Precio del curso"
          description=""
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(Number(e))}
        />
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl">Añadir imagen del curso</h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border-2 border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <h1 className="font-bold text-3xl">Vista previa de la imagen</h1>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Vista previa de la imagen"
              className="w-full h-fit object-cover rounded-lg"
            />
          ) : (
            <p className="text-gray-500">No se ha seleccionado ninguna imagen</p>
          )}
        </div>
        <select value={categories}  className="border-2 border-gray-300 rounded-lg p-2">
            {categories.map((category : any) => {
                return <option value={category.id} onChange={() => setCategoryId(category.id)}>{category.type}</option>;
            })}
        </select>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl">Nombre del instructor</h1>
            <p className="text-lg">Escribe el nombre del instructor</p>
          </div>
          <CustomInputText
            value={instructorName}
            placeHolder="Nombre del instructor"
            hasBorder={true}
            onChange={(e) => setInstructorName(e)}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-3xl">Biografía del Instructor</h1>
            <p className="text-lg">Incluye una breve biografía del instructor</p>
          </div>
          <CustomInputText
            value={instructorBio}
            placeHolder="Tengo experiencia en..."
            hasBorder={true}
            onChange={(e) => setInstructorBio(e)}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-2">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Grado académico del instructor</h1>
            <p className="text-lg">Indique el grado académico del instructor</p>
          </div>
          <CustomInputText
            value={instructorDegree}
            placeHolder="Doctor en..."
            hasBorder={true}
            onChange={(e) => setInstructorDegree(e)}
          />
        </div>
        <CustomButton title="Crear curso" onSubmit={onSubmit} />
        <br />
      </section>
    </div>
  );
}

export default CreateCourse;
