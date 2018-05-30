import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field2',
  templateUrl: './text-field2.component.html',
  styleUrls: ['./text-field2.component.css']
})
export class TextField2Component implements OnInit {

  input2:string="0";
    @Output() result2 : EventEmitter<any> = new EventEmitter<any>();
  
    constructor() { } 
  
    updateValue():void{
      console.log("input2 "+this.input2);
      this.result2.emit(this.input2);
    }

  ngOnInit() {
  }

}
