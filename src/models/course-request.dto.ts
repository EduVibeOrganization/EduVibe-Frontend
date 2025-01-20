import Cookies from "js-cookie";
export class CourseRequestDTO{
    title: string;
    description: string;
    categoryId: number;
    userId: number;
    price: number;
    subtitle: string;
    hours: number;
    banner: string;
    difficulty: string;
    startDate: string;
    endDate: string;
    rating: number;

    constructor (title: string, description: string, categoryId: number,price: number, subtitle: string, hours: number, banner: string, difficulty: string, startDate: string, endDate: string){
        this.title = title;
        this.description = description;
        this.categoryId = categoryId;
        this.userId = Number(Cookies.get("id"));
        this.price = price;
        this.subtitle = subtitle;
        this.hours = hours;
        this.banner = banner;
        this.difficulty = difficulty;
        this.startDate = startDate;
        this.endDate = endDate;
        this.rating = 0;
    }
}