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

  constructRulingNumberFromDate(dateString: string) {
    return this._getRulingNumber(this._calculateRulingNumber(dateString));
  }

  constructRulingNumberFromNumber(number: number){
    return this._getRulingNumber(number);
  }

  _reCalc(_x) {
    if (_x == 20) return 2;
    if (_x == 22) return _x;
    if (_x < 12) {
      return _x;
    }
    _x = (Math.floor(_x / 10) + _x % 10);
    return this._reCalc(_x);
  }

  _calculateRulingNumber(dateString) {
    let rulingNumbers = 0;

    for (let index = 0; index < dateString.length; index++) {
      rulingNumbers += (dateString.charCodeAt(index) - 48);
    }

    return this._reCalc(rulingNumbers);
  }

  _getRulingNumbers(): Observable<any> {
    return this._httpClient.get<any>("api/rulingNumbers");
  }

  _getRulingNumber(number: number): RulingNumber {
    if (this.rulingNumbers.length) {
      return this.rulingNumbers.filter(rN => rN.number === number)[0];
    } else {
      this._getRulingNumbers().subscribe(rulingNumbers => {
        rulingNumbers.forEach(rN => {
          this.rulingNumbers.push(new RulingNumber(rN));
        });
        return this.rulingNumbers.filter(rN => rN.number === number)[0];
      })
    }
  }
}
