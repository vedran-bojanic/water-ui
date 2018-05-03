import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerStyleService } from './services/beer-style.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    BeerStyleService
  ]
})
export class WaterModule { }
