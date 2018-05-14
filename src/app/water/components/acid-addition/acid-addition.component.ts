import { Component, Input, OnInit } from '@angular/core';
import { Acid } from '../../models/acid';

@Component({
  selector: 'app-acid-addition',
  templateUrl: './acid-addition.component.html'
})
export class AcidAdditionComponent {

  @Input() acids: Array<Acid>;
  selectedAcid: Acid;

  constructor() {
    if (!this.selectedAcid) {
      this.selectedAcid = this.acids[0];
    }
  }

}
