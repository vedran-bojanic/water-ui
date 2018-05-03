import { Component, OnInit } from '@angular/core';
import { BeerStyleService } from '../../services/beer-style.service';

@Component({
  selector: 'app-beer-style',
  templateUrl: './beer-style.component.html',
  styleUrls: ['./beer-style.component.css']
})
export class BeerStyleComponent implements OnInit {
  beerStyles: Array<any>;

  constructor(private beerStyleService: BeerStyleService) { }

  ngOnInit() {
    this.beerStyleService.getAllBeerStyles().subscribe(data => {
      this.beerStyles = data;
    });
  }
}
