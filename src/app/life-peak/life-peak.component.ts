import { Component, OnInit } from '@angular/core';
import { DataCalculationService } from '../core/services/data-calculation.service';
import { LifePeak } from '../shared/models/life-peak.model';

@Component({
  selector: 'app-life-peak',
  templateUrl: './life-peak.component.html',
  styleUrls: ['./life-peak.component.scss']
})
export class LifePeakComponent implements OnInit {
  lifePeaks: any[];

  constructor(
    private _dataCalculaionService: DataCalculationService
  ) {
    this.lifePeaks = [];
  }

  ngOnInit(): void {
    this.lifePeaks = this._dataCalculaionService.dOB.lifePeaks;
    if (!this.lifePeaks || !this.lifePeaks.length) {
      this._dataCalculaionService.reCalculateLifePeaks();
    }
    this._dataCalculaionService.onDataChange.subscribe(dob => {
      if (dob.rulingNumber && dob.rulingNumber.number) {
        if (dob.lifePeaks) {
          this.lifePeaks = dob.lifePeaks;
          this.lifePeaks.forEach(lP => lP = { ...lP, ...{ expanded: false } });
        } else {
          this._dataCalculaionService.reCalculateLifePeaks();
        }
      } else {
        this._dataCalculaionService.calculateRulingNumber();
      }
    })
  }
}
