import { TextField3Component } from './../text-field3/text-field3.component';
import { TextField2Component } from './../text-field2/text-field2.component';
import { TextField1Component } from './../text-field1/text-field1.component';
import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {

  @Output() parentClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onclick(){
    this.parentClick.emit("11111");
  }

}
