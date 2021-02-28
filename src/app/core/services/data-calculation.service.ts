import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { DOB } from 'src/app/shared/models/DOB.model';
import { RulingNumberService } from 'src/app/shared/services/ruling-number.service';

@Injectable({
  providedIn: 'root'
})
export class DataCalculationService {
  hasValue: boolean;
  dOB: DOB;
  onDataChange: BehaviorSubject<DOB>;

  constructor(
    private _rulingNumberService: RulingNumberService
  ) {
    this.hasValue = false;
    this.dOB = new DOB();
    this.onDataChange = new BehaviorSubject(this.dOB);
  }

  storeData(dob: DOB) {
    this.dOB = dob;
    this.onDataChange.next(dob);
    this.hasValue = true;
  }

  checkData() {
    return this.hasValue;
  }

  calculateRulingNumber() {
    const rulingNumber = this._calculateRulingNumber(this.dOB.dateString);
    this.dOB.rulingNumber = this._rulingNumberService.getRulingNumber(rulingNumber);
    this.onDataChange.next(this.dOB);
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
}
