import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  transferStyleObj,
  setIdSelector,
} from './../../../../reducers/formBuilder';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IElementStyle } from 'src/app/types/interface/app.interface';

@Component({
  selector: 'app-style-acordion',
  templateUrl: './style-acordion.component.html',
  styleUrls: ['./style-acordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StyleAcordionComponent implements OnInit {
  public form!: FormGroup;
  public id$: Observable<number> = this.store.select(setIdSelector);
  public elementStyle: IElementStyle = {};
  constructor(public store: Store) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      placeholder: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      checkbox: new FormControl(''),
      border: new FormControl(''),
      'font-size': new FormControl(''),
      Select: new FormControl(''),
      'backround-color': new FormControl(''),
    });
  }

  submit() {
    this.elementStyle = { ...this.form.value };
    this.store.dispatch(transferStyleObj({ elementStyle: this.elementStyle }));
  }
}
