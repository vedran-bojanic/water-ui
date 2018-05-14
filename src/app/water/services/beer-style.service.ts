import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BeerStyle } from '../models/beer-style';
import { map } from 'rxjs/operators';

@Injectable()
export class BeerStyleService {

  BEER_STYLE_URL = '/beerStyle';

  beerStyles: Array<BeerStyle>;

  constructor(private http: HttpClient) { }

  getAllBeerStyles(): Observable<Array<BeerStyle>> {
    return this.http.get<Array<BeerStyle>>(this.BEER_STYLE_URL)
      .pipe(
        map(beerStyle => this.beerStyles = beerStyle)
      );
  }

}
