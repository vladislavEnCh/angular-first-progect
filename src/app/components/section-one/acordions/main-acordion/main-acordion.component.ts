import { DestroyService } from './../../../../services/destroy.service';

import { takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { IGlobalStyle } from './../../../../page/main-page/interfaces/interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { transferMainStyleObj } from 'src/app/reducers/formBuilder';

@Component({
  selector: 'app-main-acordion',
  templateUrl: './main-acordion.component.html',
  styleUrls: ['./main-acordion.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MainAcordionComponent),
      multi: true,
    },
    DestroyService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAcordionComponent implements OnInit {
  public formMain!: FormGroup;
  public globalStyle: IGlobalStyle = {};
  constructor(
    public store: Store,
    @Inject(DestroyService) private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.formMain = new FormGroup({
      'background-color': new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      border: new FormControl(''),
    });
  }

  submitMainStyle() {
    this.globalStyle = { ...this.formMain.value };
    this.store.dispatch(
      transferMainStyleObj({ globalStyle: this.globalStyle })
    );
  }
  public writeValue(value: string[]) {
    if (value) {
      this.formMain.setValue(value);
    }
  }
  registerOnChange(formChanges: (value: string) => void): void {
    this.formMain.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(formChanges);
  }
  registerOnTouched() {}
}
