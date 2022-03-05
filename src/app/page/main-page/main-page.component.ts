import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IElementStyle } from 'src/app/types/interface/app.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mainStyleObj!: IElementStyle;

  addStyleObj(event: IElementStyle) {
    this.mainStyleObj = { ...event };
    console.log(this.mainStyleObj);
  }
}
