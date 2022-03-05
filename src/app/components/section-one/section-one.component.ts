import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionOneComponent {
  constructor() {}
}
