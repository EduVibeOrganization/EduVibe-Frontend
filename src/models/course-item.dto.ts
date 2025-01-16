export class CourseItemDTO{
    id: number;
    title: string;
    banner?: string;
    video?: string;
    description?: string;
    constructor(id:number,title:string, banner:string, video:string, description:string){
        this.id = id;
        this.title = title;
        this.banner = banner;
        this.video = video;
        this.description = description;
    }
}