import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WaterModule } from './water/water.module';
import { NavbarComponent } from './header/components/navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/components/footer/footer.component';
import { BeerStyleComponent } from './water/components/beer-style/beer-style.component';
import { SourceWaterDataComponent } from './water/components/source-water-data/source-water-data.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BeerStyleComponent,
    SourceWaterDataComponent
  ],
  imports: [
    BrowserModule,
    WaterModule,
    NgbModule.forRoot()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
