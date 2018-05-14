import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeerStyle } from './water/models/beer-style';
import { ISubscription } from 'rxjs/Subscription';
import { BeerStyleService } from './water/services/beer-style.service';
import { Acid } from './water/models/acid';
import { AcidService } from './water/services/acid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  beerStyles: Array<BeerStyle>;
  selectedBeer: BeerStyle;
  beerStyleSubscription: ISubscription;

  acids: Array<Acid>;
  selectedAcid: Acid;
  acidSubscription: ISubscription;

  constructor(private beerStyleService: BeerStyleService, private acidService: AcidService) { }

  ngOnInit(): void {
    this.beerStyleSubscription = this.beerStyleService.getAllBeerStyles()
      .subscribe(beers => {
        this.beerStyles = beers;
        this.selectedBeer = this.beerStyles[0];
      });

    this.acidSubscription = this.acidService.getAllAcids()
      .subscribe(acids => {
        this.acids = acids;
        this.selectedAcid = this.acids[0];
      });
      }

  ngOnDestroy() {
    this.beerStyleSubscription.unsubscribe();
  }

}
