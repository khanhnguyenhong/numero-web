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
    private rulingNumberService: RulingNumberService,
    private lifePeakService: LifePeakService
  ) {
    this.hasValue = false;
    this.dOB = new DOB();
    this.onDataChange = new BehaviorSubject(this.dOB);
  }

  storeData(dob: DOB) {
    this.dOB = dob;
    this.dOB.rulingNumber = this.rulingNumberService.constructRulingNumberFromDate(this.dOB.dateString);
    this.calculateLifePeaks();
    this.onDataChange.next(dob);
    this.hasValue = true;
  }

  checkData() {
    return this.hasValue;
  }

  calculateRulingNumber() {
    this.dOB.rulingNumber = this.rulingNumberService.constructRulingNumberFromDate(this.dOB.dateString);
    this.onDataChange.next(this.dOB);
  }

  calculateLifePeaks() {
    if (!this.dOB.rulingNumber || !this.dOB.rulingNumber.number) {
      return;
    }
    const day = this.dOB.originDate.getDate() + '';
      const month = (this.dOB.originDate.getMonth() + 1) + '';
      const year = this.dOB.originDate.getFullYear() + '';
    this.dOB.lifePeaks = this.lifePeakService.constructLifePeaks(day, month, year, this.dOB.rulingNumber.number);
  }

  reCalculateLifePeaks(){
    this.dOB.rulingNumber = this.rulingNumberService.constructRulingNumberFromDate(this.dOB.dateString);
    this.calculateLifePeaks();
    this.onDataChange.next(this.dOB);
  }
}
