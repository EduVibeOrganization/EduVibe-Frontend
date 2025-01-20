export class CreateInstructorDTO {
    name: string;
    degree: string;
    description: string;
    constructor(name: string, degree: string, description: string) {
        this.name = name;
        this.degree = degree;
        this.description = description;
    }
}