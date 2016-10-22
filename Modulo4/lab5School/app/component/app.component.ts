import { Component } from '@angular/core';
import {Student}   from   '../model/student'; 
import {Teacher}   from   '../model/teacher';  


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
})
export class AppComponent {
	
   tittle:string="SHOOL" 
	students:Student[]=STUDENTS;
	teacher :Teacher[]=TEACHERS;

	selected: Student;


	onSelect(student: Student) {
		this.selected = student;
    }

}

const STUDENTS: Student[] = [
    {
        id:1,
	      name:"Edinson",
	      class:["Biologia","Geografia"],
	      grade:4
    },
    {
        id:2,
	      name:"German",
	      class:["matematicas","filosofia"],
	      grade:5
    },
    {
        id:3,
	      name:"pedro",
	      class:["algebra","sociales"],
	      grade:2
    }
];

const TEACHERS: Teacher[] = [
    {
        id:1,
	 name:"juan",
	 rooms:[301,201,603],
	 studies:["bilogia","Geografia"]
    },
    {
        id:2,
	 name:"griselda",
	 rooms:[501,602,603],
	 studies:["bilogia","Geografia"]
    },
    {
        id:3,
	      name:"pancracia",
	      rooms:[105,205,603],
	      studies:["biologia","Geografia"]
    }
];