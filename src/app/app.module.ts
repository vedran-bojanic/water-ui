import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WaterModule } from './water/water.module';
import { BeerStyleComponent } from './water/components/beer-style/beer-style.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerStyleComponent
  ],
  imports: [
    BrowserModule,
    WaterModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
