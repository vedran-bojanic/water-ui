import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WaterModule } from './water/water.module';
import { BeerStyleComponent } from './water/components/beer-style/beer-style.component';
import { NavbarComponent } from './header/components/navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BeerStyleComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    WaterModule,
    NgbModule.forRoot()
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
