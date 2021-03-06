import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() students!: Array<string>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
