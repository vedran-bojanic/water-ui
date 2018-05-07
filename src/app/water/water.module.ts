import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerStyleService } from './services/beer-style.service';
import { HttpClientModule } from '@angular/common/http';
import { BeerStyleComponent } from './components/beer-style/beer-style.component';
import { SourceWaterDataComponent } from './components/source-water-data/source-water-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    BeerStyleService
  ],
  declarations: [
    BeerStyleComponent,
    SourceWaterDataComponent
  ],
  exports: [
    BeerStyleComponent,
    SourceWaterDataComponent
  ]
})
export class WaterModule { }
