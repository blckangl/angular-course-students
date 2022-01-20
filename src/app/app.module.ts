import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { WarningComponent } from './warning/warning.component';
import { StudentsComponent } from './students/students.component';
import {FormsModule} from "@angular/forms";
import { TurnGreenDirective } from './turn-green.directive';
import { StudentInputComponent } from './student-input/student-input.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    WarningComponent,
    StudentsComponent,
    TurnGreenDirective,
    StudentInputComponent,
    StudentListComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
