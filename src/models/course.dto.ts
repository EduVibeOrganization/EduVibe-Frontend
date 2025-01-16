export class CourseDTO{
    title: string;
    subtitle: string;
    description: string;
    rating: number;
    startDate: Date;
    endDate: Date;
    progressRate: number;
    hours: number;
    banner: string;
    price: number;
    id: number;

    constructor(title: string, rating: number, startDate: Date, endDate: Date, progressRate: number, subTitle:string, description:string, hours: number,  banner: string, price: number, id:number){
        this.title = title;
        this.rating = rating;
        this.startDate = startDate;
        this.endDate = endDate;
        this.progressRate = progressRate;
        this.subtitle = subTitle;
        this.description = description;
        this.hours = hours;
        this.banner = banner;
        this.price = price;
        this.id = id;
    }
}