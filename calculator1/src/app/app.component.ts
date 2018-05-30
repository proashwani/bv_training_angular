import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input1:string;
  input2:string;
  result:string;

  setInput1(text:string){
    this.input1 = text;
    console.log(this.input1);
  }

  setInput2(text:string){
    this.input2 = text;
    console.log(this.input2);
  }

  getResult():string{
    console.log(parseInt(this.input1)+parseInt(this.input2)+"");
    return parseInt(this.input1)+parseInt(this.input2)+"";
  }


}
