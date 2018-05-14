import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeerStyleService } from '../../services/beer-style.service';
import { BeerStyle } from '../../models/beer-style';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-beer-style',
  templateUrl: './beer-style.component.html'
})
export class BeerStyleComponent implements OnInit, OnDestroy {

  beerStyles: Array<BeerStyle>;
  selectedBeer: BeerStyle;
  beerStyleSubscription: ISubscription;

  constructor(private beerStyleService: BeerStyleService) { }

  ngOnInit() {
    this.selectedBeer = {
      id: 0,
      bjcpStyleId: '',
      name: '',
      calciumRange: '',
      magnesiumRange: '',
      alkalinityRange: '',
      sulfateRange: '',
      chlorideRange: '',
      sodiumRange: '',
      residualAlkalinityRange: '',
      color: ''
    }

    this.beerStyleSubscription = this.beerStyleService.getAllBeerStyles()
      .subscribe(beers => {
        this.beerStyles = beers;
        this.selectedBeer = this.beerStyles[0];
      });
  }

  ngOnDestroy() {
    this.beerStyleSubscription.unsubscribe();
  }

}
