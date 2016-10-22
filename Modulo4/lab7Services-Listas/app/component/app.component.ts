import { Component ,OnInit} from '@angular/core';
import {Student}   from   '../model/student'; 
import {Teacher}   from   '../model/teacher'; 
import {StudentService} from '../services/student.service'; 
import {TeacherService} from '../services/teacher.service'; 


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
   providers: [StudentService,TeacherService]
})
export class AppComponent  implements OnInit{


	constructor(private StudentService: StudentService,TeacherService:TeacherService){}

     tittle:string="SHOOL" 
	
	selected: Student;


	onSelect(student: Student) {
		this.selected = student;
	

	ngOnInit(){
		this.StudentService.getStudents()
		.then(student => this.products = products)
		.catch(error => console.log(error));
   
    }

}

