import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'sc1';
  userName: string;


  constructor() {
    this.userName = ''
  }

  resetUserName() {
    if(this.userName.length==0){
      return;
    }
    this.userName = ""
  }

  isUserNameEmpty():boolean {
    if(this.userName.length==0){
      return true;
    }

    return  false;
  }
}
