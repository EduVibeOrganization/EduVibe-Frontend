import { CourseItemDTO } from "@/models/course-item.dto";
import { ResourceService } from "@/services/resource.service";
import { useEffect, useState } from "react";
import Image from "next/image";
interface SectionCardProps {
  section: CourseItemDTO;
}

export function SectionCard({ section }: SectionCardProps) {
  const [showResources, setShowResources] = useState<boolean>(false);
  const [resources, setResources] = useState<CourseItemDTO[]>([]); 
  const resourceService = new ResourceService(); 

  useEffect(() => {
    if (showResources) {
      resourceService.getResourcesBySectionId(section.id).then((response) => {
        setResources(response.data);
      });
    }

  }, [showResources, section.id]);

  function toggleResources() {
    setShowResources((prev) => !prev);
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
        <div className="flex flex-col gap-3">
          {resources.map((resource) => (
            <div
              key={resource.id} 
              className="bg-blue-300 rounded-xl  p-2 text-start border-2 border-black mt-2 flex justify-between"
            >
              <Image src={resource.banner!} alt={resource.title} width={150} height={50} />
              <div className="flex flex-col gap-4">
                <h1 className="font-bold">{resource.title}</h1>
                <p>{resource.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
