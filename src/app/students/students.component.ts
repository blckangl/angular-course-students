import {Component, OnInit} from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentName: string;
  nbStudents: number;
  addedWithSuccess = false;

  showAlert: boolean = false;
  students: Array<string>;

  constructor() {
    this.students = new Array<string>();
    this.studentName = ''
    this.nbStudents = 0;
  }

  increment(str: string, event: MouseEvent): void {
    console.log(event)
    this.nbStudents++;

  }

  addStudent(event: any) {
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false
    }, 3000)
    if (this.isStudentNameValid(event)) {
      this.addedWithSuccess = true;
      this.students.push(event)
    } else {
      this.addedWithSuccess = false
    }


  }

  isStudentNameValid(studentName:string): boolean {
    if (studentName.length > 0 && !studentName.includes('/')) {
      return true;
    } else {
      return false
    }
  }

  ngOnInit(): void {
  }

  onInputChange(e: any) {
    console.log(e.target.value)
    this.studentName = e.target.value;
  }
}
