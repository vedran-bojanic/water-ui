import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerStyleService } from './services/beer-style.service';
import { HttpClientModule } from '@angular/common/http';
import { BeerStyleComponent } from './components/beer-style/beer-style.component';
import { SourceWaterComponent } from './components/source-water/source-water.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MashWaterComponent } from './components/mash-water/mash-water.component';
import { DiluteWaterComponent } from './components/dilute-water/dilute-water.component';
import { SaltAdditionComponent } from './components/salt-addition/salt-addition.component';
import { AcidAdditionComponent } from './components/acid-addition/acid-addition.component';
import { WaterSummaryComponent } from './components/water-summary/water-summary.component';
import { SpargeWaterComponent } from './components/sparge-water/sparge-water.component';
import { AcidService } from './services/acid.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    BeerStyleService,
    AcidService
  ],
  declarations: [
    BeerStyleComponent,
    SourceWaterComponent,
    MashWaterComponent,
    DiluteWaterComponent,
    SaltAdditionComponent,
    AcidAdditionComponent,
    WaterSummaryComponent,
    SpargeWaterComponent
  ],
  exports: [
    BeerStyleComponent,
    SourceWaterComponent,
    MashWaterComponent,
    DiluteWaterComponent,
    SaltAdditionComponent,
    AcidAdditionComponent,
    WaterSummaryComponent,
    SpargeWaterComponent
  ]
})
export class WaterModule { }
