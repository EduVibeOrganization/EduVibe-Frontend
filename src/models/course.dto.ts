export class CourseDTO{
    title: string;
    subtitle: string;
    description: string;
    rating: number;
    startDate: Date;
    endDate: Date;
    progressRate: number;

    constructor(title: string, rating: number, startDate: Date, endDate: Date, progressRate: number, subTitle:string, description:string){
        this.title = title;
        this.rating = rating;
        this.startDate = startDate;
        this.endDate = endDate;
        this.progressRate = progressRate;
        this.subtitle = subTitle;
        this.description = description;
    }
}