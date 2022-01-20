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

  addStudent(){
    this.students.push(this.studentName)
    this.studentName = '';
  }
  isStudentNameValid(): boolean {
    if (this.studentName.length > 0 && !this.studentName.includes('/')) {
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
