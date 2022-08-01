import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { DateComponent } from './date/date.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    LoaderComponent,
    DateComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    DateComponent,
    TitleComponent
  ]
})
export class SharedModule { }
