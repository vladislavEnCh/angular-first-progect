import { DestroyService } from './../../services/destroy.service';

import { takeUntil } from 'rxjs';
import {
  IObjectWithStyle,
  IGlobalStyle,
} from './../../page/main-page/interfaces/interfaces';
import { setMainStyleObjSelector } from './../../reducers/formBuilder';
import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { IElementStyle } from 'src/app/types/interface/app.interface';
import { Store } from '@ngrx/store';
import { setStyleObjSelector, transferId } from 'src/app/reducers/formBuilder';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
  providers: [DestroyService],
})
export class SectionTwoComponent implements OnInit {
  public countId: number = 0;
  public dropList: Array<any> = [];
  private compareId!: number;
  public newStyleObj!: IElementStyle;
  public styleForMainBlock!: IGlobalStyle;
  public element!: string;
  public dropElement!: IObjectWithStyle;

  constructor(
    private store: Store,
    @Inject(DestroyService) private readonly destroy$: DestroyService
  ) {}

  getStyleForId(val: IElementStyle) {
    if (this.dropList) {
      let filteredArray: Array<IObjectWithStyle> = this.dropList.filter(
        (item: IObjectWithStyle) => item.id == this.compareId
      );
      if (filteredArray[0] !== undefined) {
        filteredArray[0].style = val;
      }
    }
  }
  getMainStyleFromStore(val: IGlobalStyle) {
    this.styleForMainBlock = val;
  }

  ngOnInit(): void {
    this.store
      .select(setStyleObjSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => this.getStyleForId(value));
    this.store
      .select(setMainStyleObjSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => this.getMainStyleFromStore(value));
  }
  takeId(id: number) {
    this.store.dispatch(transferId({ id }));
    this.compareId = id;
  }

  drop(event: CdkDragDrop<string[]>) {
    this.element = event.previousContainer.data[event.previousIndex];
    this.dropElement = {
      item: this.element,
      id: this.countId,
      style: {},
    };
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.countId++;
      event.previousContainer.data.splice(event.previousIndex, 1, this.element);
      event.container.data.splice(
        event.currentIndex,
        0,
        JSON.parse(JSON.stringify(this.dropElement))
      );
    }
  }
}
