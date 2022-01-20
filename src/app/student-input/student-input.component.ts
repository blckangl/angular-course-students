import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.scss']
})
export class StudentInputComponent implements OnInit {

  @Output() onStudentAdd: EventEmitter<any> = new EventEmitter<any>()
  studentName: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addStudent() {
    this.onStudentAdd.emit(this.studentName)
    this.studentName = '';
  }
}
