import { ReplaySubject, Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AppService implements OnDestroy {
//   public destroyer$: Subject<any> = new Subject<any>();

//   constructor() {}
//   ngOnDestroy(): void {
//     this.destroyer$.next(true);
//     this.destroyer$.complete();
//   }
// }

@Injectable()
export class DestroyService extends ReplaySubject<void> implements OnDestroy {
  constructor() {
    super(1);
  }

  ngOnDestroy() {
    this.next();
    this.complete();
  }
}
