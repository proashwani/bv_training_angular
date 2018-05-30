import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-field3',
  templateUrl: './text-field3.component.html',
  styleUrls: ['./text-field3.component.css']
})
export class TextField3Component implements OnInit {

  result:string="0";
  @Input("input1") input1:string;
  @Input("input2") input2:string;

  constructor() { }

  getResult():void{
    this.result =  this.input1+this.input2;
  }

  ngOnInit() {
  }

}
