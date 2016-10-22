import {Injectable} from "@angular/core";
import {TEACHERS} from "../mock/teachers-mock";

@Injectable()
export class TeacherService{
    getTeachers(){
        return Promise.resolve(TEACHERS);
    }
}