import Cookies from "js-cookie";
export class CourseRequestDTO{
    title: string;
    description: string;
    categories_id: number;
    users_id: number;
    price: number;
    subtitle: string;
    hours: number;
    banner: string;
    difficulty: string;
    start_date: string;
    end_date: string;
    rating: number;

    constructor (title: string, description: string, categories_id: number,price: number, subtitle: string, hours: number, banner: string, difficulty: string, start_date: string, end_date: string, users_id:number){
        this.title = title;
        this.description = description;
        this.categories_id = categories_id;
        this.users_id = users_id;
        this.price = price;
        this.subtitle = subtitle;
        this.hours = hours;
        this.banner = banner;
        this.difficulty = difficulty;
        this.start_date = start_date;
        this.end_date = end_date;
        this.rating = 0;
    }
}