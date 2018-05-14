import { Component, Input } from '@angular/core';
import { BeerStyle } from '../../models/beer-style';

@Component({
  selector: 'app-beer-style',
  templateUrl: './beer-style.component.html'
})
export class BeerStyleComponent {

  @Input() selectedBeer: BeerStyle;

  constructor() { }

}
