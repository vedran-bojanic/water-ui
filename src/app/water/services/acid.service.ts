import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Acid } from '../models/acid';

@Injectable()
export class AcidService {

  ACID_URL = '/acid';

  acids: Array<Acid>;

  constructor(private http: HttpClient) { }

  getAllAcids(): Observable<Array<Acid>> {
    return this.http.get<Array<Acid>>(this.ACID_URL)
      .pipe(
        map(acids => this.acids = acids)
      );
  }

}
