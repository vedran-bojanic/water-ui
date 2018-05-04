import { Component, OnInit } from '@angular/core';
import { BeerStyleService } from '../../services/beer-style.service';

@Component({
  selector: 'app-beer-style',
  templateUrl: './beer-style.component.html'
})
export class BeerStyleComponent implements OnInit {
  beerStyles: Array<any>;
  selectedBeer: any;

  constructor(private beerStyleService: BeerStyleService) { }

  ngOnInit() {
    this.beerStyleService.getAllBeerStyles().subscribe(data => {
      this.beerStyles = data;
    });
  }
}
