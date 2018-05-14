import { Component, OnInit } from '@angular/core';
import { Acid } from '../../models/acid';
import { ISubscription } from 'rxjs/Subscription';
import { AcidService } from '../../services/acid.service';

@Component({
  selector: 'app-acid-addition',
  templateUrl: './acid-addition.component.html'
})
export class AcidAdditionComponent implements OnInit {

  acids: Array<Acid>;
  selectedAcid: Acid;
  acidSubscription: ISubscription;

  constructor(private acidService: AcidService) { }

  ngOnInit() {
    this.selectedAcid = {
      id: 0,
      name: ''
    };

    this.acidSubscription = this.acidService.getAllAcids()
      .subscribe(acids => {
        this.acids = acids;
        this.selectedAcid = this.acids[0];
      });
  }

}
