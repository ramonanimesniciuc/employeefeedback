import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class EmployeeUpload{
    public name:string;
    public enrollment:Date;
    public departmentId:string;
    public role:string;
    public email:string;
    public password: string;
    public birthdate: Date;
    public managerId:String;

    constructor(input) {
        this.name = input.name;
        this.enrollment = input.enrollment;
        this.departmentId = input.departmentId;
        this.role = input.role;
        this.email = input.email;
        this.password = input.password;
        this.birthdate = input.birthdate;
        this.managerId = input.managerId;
    }
}
