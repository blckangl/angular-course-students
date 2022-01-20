import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appTurnGreen]'
})
export class TurnGreenDirective implements OnInit{

  constructor(private el:ElementRef) {
  }

  ngOnInit(): void {
    console.log( )
    this.el.nativeElement.style.color = 'white';
    this.el.nativeElement.style.backgroundColor='green'


  }



}
