import { setMainStyleObjSelector } from './../../reducers/formBuilder';
import { dropObjectInterface } from './../../types/interface/app.interface';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { styleObj } from 'src/app/types/interface/app.interface';
import { Store } from '@ngrx/store';
import { setStyleObjSelector, transferId } from 'src/app/reducers/formBuilder';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})


export class SectionTwoComponent implements OnInit, OnChanges {

  constructor(private store:Store) { }

@Input() id!:number


compareId1?:number
compareId2?:number
newStyleObj!:styleObj
arrDropElements!:Array<any>
styleForMainBlock!:Object

ngOnChanges(changes: SimpleChanges) {
  // this.styleObj$
  console.log('0')

}
getStyleById(val:any){
  // console.log('arr',this.arrDropElements)
  // console.log(val,'we')
  if(this.done){
      console.log('arr',this.done)
    this.done
      let newr:any = this.done.filter((item:any) => item.id == this.compareId2)
      if(newr[0] !== undefined){
        newr[0].style = val
        // console.log('4',newr[0])
        // console.log('2',this.done[0] == newr[0])
      }
    }
}
getMainStyleFromStore(val:Object){
  this.styleForMainBlock = val
  // console.log(val)
}

  ngOnInit(): void {
    this.store.select(setStyleObjSelector)
    .subscribe(value =>  this.getStyleById(value))
    this.store.select(setMainStyleObjSelector)
    .subscribe(value => this.getMainStyleFromStore(value) )
  }
  takeId(id:any){
    console.log(id)
    this.store.dispatch(transferId({id}))
    this.compareId2 = id
    // console.log('done',this.arrDropElements)
    
    // this.arrDropElements[0].style = this.styleObj$
  }
  takeType(event:any){
    // console.log(event.target.tagName.toLowerCase())
  }
  count: number = 0 ;
  // countId: any = Math.floor(Math.random()) ;
  done:any = [];
  
  
  drop(event: CdkDragDrop<string[]>) {
    const el:any = event.previousContainer.data[event.previousIndex]
    const obj:any = {item:el, id!:this.count, style:{}}
    // this.compareId1=event.currentIndex
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.count ++
      // event.previousContainer.data.splice(event.previousIndex,1, el)
      // event.container.data.splice(event.currentIndex,0,el)  
      event.previousContainer.data.splice(event.previousIndex,1, el)
      event.container.data.splice(event.currentIndex,0,obj)
    }
    this.arrDropElements = this.done
    // console.log('done',this.arrDropElements)
  }

}
