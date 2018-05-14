import { Component, Input } from '@angular/core';
import { Acid } from '../../models/acid';

@Component({
  selector: 'app-sparge-water',
  templateUrl: './sparge-water.component.html'
})
export class SpargeWaterComponent {

  @Input() acids: Array<Acid>;
  selectedAcid: Acid;

  constructor() {
    if (!this.selectedAcid) {
      this.selectedAcid = this.acids[0];
    }
  }

}
