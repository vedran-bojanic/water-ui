import { Component, Input } from '@angular/core';
import { BeerStyle } from '../../models/beer-style';

@Component({
  selector: 'app-water-summary',
  templateUrl: './water-summary.component.html'
})
export class WaterSummaryComponent {

  @Input() selectedBeer: BeerStyle;

  constructor() { }

}
