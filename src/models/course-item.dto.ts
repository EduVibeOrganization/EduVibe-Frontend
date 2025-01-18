export class CourseItemDTO{
    id: number;
    title: string;
    banner?: string;
    fileUrl?: string;
    description?: string;
    courses_id: number;
    constructor(id:number,title:string, banner:string, fileUrl:string, description:string, courses_id:number){
        this.id = id;
        this.title = title;
        this.banner = banner;
        this.fileUrl= fileUrl;
        this.description = description;
        this.courses_id = courses_id;
    }
}