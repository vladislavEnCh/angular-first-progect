import { transferMainStyleObj } from './../../reducers/formBuilder';
import { Component, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { styleObj } from 'src/app/types/interface/app.interface';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { setIdSelector, transferStyleObj } from 'src/app/reducers/formBuilder';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef( () => SectionOneComponent) ,
    multi:true,
  }]
})
export class SectionOneComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Output() addStyleObj:EventEmitter<styleObj> = new EventEmitter<styleObj>()
  form!:FormGroup
  formMain!:FormGroup
  
  
  constructor(private store:Store) { }
  
  ngOnInit(): void {
    
    this.form= new FormGroup({
      placeholder: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      checkbox: new FormControl(''),
      'border': new FormControl(''),
      'font-size':new FormControl(''),
      Select: new FormControl(''),
      'backround-color': new FormControl('')
    })
    this.formMain = new FormGroup({
      'background-color': new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      border: new FormControl('')
    })
  
  }
  id$ = this.store.select(setIdSelector)
  ngOnChanges() {
  }
  writeValue(){

  }
  registerOnChange(fn:any){
    this.formMain.valueChanges.subscribe(fn)
   
  }
  registerOnTouched(){
    
  }

  styleObj:any={}
  styleMainObj:any={}
  submit(){
    this.styleObj = {...this.form.value}
    this.store.dispatch(transferStyleObj({obj:this.styleObj}))
    // this.addStyleObj.emit(this.styleObj)
    // this.form.reset()
  }
  submiMainStyle(){
this.styleMainObj = {...this.formMain.value}
this.store.dispatch(transferMainStyleObj({mainObjStyle:this.styleMainObj}))
  }
}
