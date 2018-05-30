import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-text-field1',
  templateUrl: './text-field1.component.html',
  styleUrls: ['./text-field1.component.css']
})
export class TextField1Component implements OnInit {

  input1:string="0";

  @Output() result1 : EventEmitter<any> = new EventEmitter<any>();

  constructor() { } 

  updateValue():void{
    console.log("input1 "+this.input1);
    this.result1.emit(this.input1);
  }

  ngOnInit() {
  }

}
