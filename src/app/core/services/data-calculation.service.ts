import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { DOB } from 'src/app/shared/models/DOB.model';
import { LifePeakService } from 'src/app/shared/services/life-peak.service';
import { RulingNumberService } from 'src/app/shared/services/ruling-number.service';

@Injectable({
  providedIn: 'root'
})
export class DataCalculationService {
  hasValue: boolean;
  dOB: DOB;
  onDataChange: BehaviorSubject<DOB>;

  constructor(
    private _rulingNumberService: RulingNumberService,
    private _lifePeakService: LifePeakService
  ) {
    this.hasValue = false;
    this.dOB = new DOB();
    this.onDataChange = new BehaviorSubject(this.dOB);
  }

  storeData(dob: DOB) {
    this.dOB = dob;
    this.dOB.rulingNumber = this._rulingNumberService.constructRulingNumberFromDate(this.dOB.dateString);
    this._calculateLifePeaks();
    this.onDataChange.next(dob);
    this.hasValue = true;
  }

  checkData() {
    return this.hasValue;
  }

  calculateRulingNumber() {
    this.dOB.rulingNumber = this._rulingNumberService.constructRulingNumberFromDate(this.dOB.dateString);
    this.onDataChange.next(this.dOB);
  }

  _calculateLifePeaks() {
    if (!this.dOB.rulingNumber || !this.dOB.rulingNumber.number) {
      return;
    }
    let day = this.dOB.originDate.getDate() + "",
      month = (this.dOB.originDate.getMonth() + 1) + "",
      year = this.dOB.originDate.getFullYear() + "";
    this.dOB.lifePeaks = this._lifePeakService.constructLifePeaks(day, month, year, this.dOB.rulingNumber.number);
  }

  reCalculateLifePeaks(){
    this.dOB.rulingNumber = this._rulingNumberService.constructRulingNumberFromDate(this.dOB.dateString);
    this._calculateLifePeaks();
    this.onDataChange.next(this.dOB);
  }
}
