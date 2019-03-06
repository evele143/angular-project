import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {

	
  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
  	
  }


	addStudent(data){
		const student: any = {
			name: data.fullName,
			age: data.age,
			level: data.level,
			contact: data.contact
		};
		 this.db.collection('students').add(student)
		 .then( () => { console.log("sucsesfully created");
		 	this.router.navigate(['/students']);
		} )

		 .catch( (error) => console.log('Error: ',error) );
	}


	
}
