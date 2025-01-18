import { CourseItemDTO } from "@/models/course-item.dto";
import { ResourceService } from "@/services/resource.service";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SectionCardProps {
  section: CourseItemDTO;
}

export function SectionCard({ section }: SectionCardProps) {
  const [showResources, setShowResources] = useState<boolean>(false);
  const [resources, setResources] = useState<CourseItemDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(false); 
  const resourceService = new ResourceService();
  const router = useRouter();

  useEffect(() => {
    const fetchResources = async () => {
      if (!showResources || resources.length > 0) return; 
      setLoading(true);
      try {
        await resourceService.getResourcesBySectionId(section.id).then((response) => {
           response.data.map((resource: any) => {
            setResources((prev) => [
              ...prev,
              new CourseItemDTO(
                resource.id,
                resource.title,
                resource.banner,
                resource.file_url,
                resource.description,
                resource.courses_id
              ),
            ]);
            });
          }).catch((error) => {
            console.error("Error fetching resources:", error);
          })
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [showResources, section.id, resources.length]);

  function toggleResources() {
    setShowResources((prev) => !prev);
  }

  function onSelected(resource: CourseItemDTO) {
    router.push(`/course-video?id=${section.courses_id}&fileUrl=${resource.fileUrl}`);
  }

  return (
    <div>
      <div
        onClick={toggleResources}
        className="bg-blue-400 rounded-xl w-60 p-2 text-start border-2 border-black cursor-pointer"
      >
        <h1 className="font-bold ml-9">{section.title}</h1>
      </div>
      {showResources && (
        <div className="flex flex-col gap-3 mt-2">
          {loading ? (
            <p>Cargando recursos...</p>
          ) : resources.length > 0 ? (
            resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-blue-300 rounded-xl p-2 text-start border-2 border-black flex justify-between"
                onClick={() => onSelected(resource)}
              >
                {resource.banner ? (
                  <Image
                    src={resource.banner}
                    alt={resource.title}
                    width={150}
                    height={50}
                    className="object-cover"
                  />
                ) : (
                  <div className="bg-gray-300 w-[150px] h-[50px] flex items-center justify-center">
                    <span>Sin imagen</span>
                  </div>
                )}
                <div className="flex flex-col gap-2 ml-4">
                  <h1 className="font-bold">{resource.title}</h1>
                  <p>{resource.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No hay recursos disponibles.</p>
          )}
        </div>
      )}
    </div>
  );
}
