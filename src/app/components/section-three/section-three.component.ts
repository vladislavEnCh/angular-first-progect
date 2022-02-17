import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
// import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-section-three',
  templateUrl: './section-three.component.html',
  styleUrls: ['./section-three.component.scss']
})
export class SectionThreeComponent implements OnInit {

 
  todo = ["input", "button", "textAria", "checkBox", "Select"];

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
   
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      
    } else {
      
      transferArrayItem(
       
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
        
      );
    }
  }

}
