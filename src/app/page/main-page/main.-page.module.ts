import { MainAcordionComponent } from './../../components/section-one/acordions/main-acordion/main-acordion.component';
import { ShowPipe } from './../../pipes/show.pipe';
import { AuthGuard } from './../auth.guard';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionThreeComponent } from './../../components/section-three/section-three.component';
import { SectionTwoComponent } from './../../components/section-two/section-two.component';
import { SectionOneComponent } from './../../components/section-one/section-one.component';
import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleAcordionComponent } from 'src/app/components/section-one/acordions/style-acordion/style-acordion.component';

@NgModule({
  declarations: [
    MainPageComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    ShowPipe,
    MainAcordionComponent,
    StyleAcordionComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    DragDropModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainPageComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [[RouterModule]],
  providers: [],
  bootstrap: [],
})
export class MainPageModule {}
