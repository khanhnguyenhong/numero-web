import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RulingNumber } from '../models/ruling-number.model';

@Injectable({
  providedIn: 'root'
})
export class RulingNumberService {
  rulingNumbers: RulingNumber[];
  constructor(
    private _httpClient: HttpClient,
  ) {
    this.rulingNumbers = [];
  }

  getRulingNumber(number: number): RulingNumber {
    if (this.rulingNumbers.length) {
      return this.rulingNumbers.filter(rN => rN.number === number)[0];
    } else {
      this.getRulingNumbers().subscribe(rulingNumbers => {
        rulingNumbers.forEach(rN => {
          this.rulingNumbers.push(new RulingNumber(rN));
        });
        console.log(rulingNumbers);
        return this.rulingNumbers.filter(rN => rN.number === number)[0];
      })
    }
  }

  getRulingNumbers(): Observable<any> {
    return this._httpClient.get<any>("api/rulingNumbers");
  }
}
