import { Component, OnInit } from '@angular/core';
import { DataCalculationService } from '../core/services/data-calculation.service';
import { LifePeak } from '../shared/models/life-peak.model';

@Component({
  selector: 'app-life-peak',
  templateUrl: './life-peak.component.html',
  styleUrls: ['./life-peak.component.scss'],
})
export class LifePeakComponent implements OnInit {
  lifePeaks: LifePeak[];

  constructor(private dataCalculationService: DataCalculationService) {
    this.lifePeaks = [];
  }

  ngOnInit(): void {
    this.lifePeaks = this.dataCalculationService.dOB.lifePeaks;
    if (!this.lifePeaks || !this.lifePeaks.length) {
      this.dataCalculationService.reCalculateLifePeaks();
    }
    this.dataCalculationService.onDataChange.subscribe((dob) => {
      if (dob.rulingNumber && dob.rulingNumber.number) {
        if (dob.lifePeaks) {
          this.lifePeaks = dob.lifePeaks;
        } else {
          this.dataCalculationService.reCalculateLifePeaks();
        }
      } else {
        this.dataCalculationService.calculateRulingNumber();
      }
    });
  }
}
