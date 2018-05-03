import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {

  }
  getAllBeerStyles(): Observable<any> {
    return this.http.get('/beerStyle');
  }
}
