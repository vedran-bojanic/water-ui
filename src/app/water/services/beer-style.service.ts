import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeerStyleService {

  constructor(private http: HttpClient) {
  }
  getAllBeerStyles(): Observable<any> {
    return this.http.get('/beerStyle');
  }

}
