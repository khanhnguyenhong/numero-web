import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LifePeak } from '../models/life-peak.model';

@Injectable({
  providedIn: 'root'
})
export class LifePeakService {
  lifePeaks: LifePeak[];

  constructor(
    private _httpClient: HttpClient
  ) {
    this.lifePeaks = [];
  }

  constructLifePeaks(dayString, monthString, yearString, rulingNumber: number) {
    if (!this.lifePeaks.length) {
      async () => Promise.all([await this._getLifePeaks()]);
    }
    let lifePeaks: LifePeak[] = [];
    let baseDay = this._calculateBaseNumber(dayString);
    let baseMonth = this._calculateBaseNumber(monthString);
    let baseYear = this._calculateBaseNumber(yearString);

    const lp1 = this._reCalc(baseDay + baseMonth, 9),
      lp2 = this._reCalc(baseDay + baseYear, 9),
      lp3 = this._reCalc(lp1 + lp2, 11),
      lp4 = this._reCalc(baseYear + baseMonth, 11);

    lifePeaks.push(new LifePeak({
      number: lp1,
      age: 36 - rulingNumber,
      descriptions: this.lifePeaks.find(lp => lp.number == lp1).descriptions
    }));

    lifePeaks.push(new LifePeak({
      number: lp2,
      age: lifePeaks[0].age + 9,
      descriptions: this.lifePeaks.find(lp => lp.number == lp2).descriptions
    }));

    lifePeaks.push(new LifePeak({
      number: lp3,
      age: lifePeaks[1].age + 9,
      descriptions: this.lifePeaks.find(lp => lp.number == lp3).descriptions
    }));

    lifePeaks.push(new LifePeak({
      number: lp4,
      age: lifePeaks[2].age + 9,
      descriptions: this.lifePeaks.find(lp => lp.number == lp4).descriptions
    }));

    return lifePeaks;
  }

  _getLifePeaks() {
    this._httpClient.get<any>("api/lifePeaks").subscribe(lifePeaks => {
      lifePeaks.forEach(lp => {
        this.lifePeaks.push(new LifePeak(lp));
      });
    })
  }

  _reCalc(_x, max) {
    if (_x <= max) {
      return _x;
    }
    _x = (Math.floor(_x / 10) + _x % 10);
    return this._reCalc(_x, max);
  }

  _calculateBaseNumber(numberString) {
    let baseNumber = 0;

    for (let index = 0; index < numberString.length; index++) {
      baseNumber += (numberString.charCodeAt(index) - 48);
    }

    return this._reCalc(baseNumber, 9);
  }
}
