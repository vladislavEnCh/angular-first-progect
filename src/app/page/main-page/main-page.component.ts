import { Component, OnInit } from '@angular/core';
import { styleObj } from 'src/app/types/interface/app.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() {
 
   }

  ngOnInit(): void {
  }
 
  mainStyleObj!:styleObj;
  
  addStyleObj(event:styleObj){
    this.mainStyleObj = {...event}
      console.log( this.mainStyleObj)
  }
  
}
