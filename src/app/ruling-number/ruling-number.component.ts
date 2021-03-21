import { Component, OnInit } from '@angular/core';
import { DataCalculationService } from '../core/services/data-calculation.service';
import { DOB } from '../shared/models/DOB.model';

@Component({
  selector: 'app-ruling-number',
  templateUrl: './ruling-number.component.html',
  styleUrls: ['./ruling-number.component.scss']
})
export class RulingNumberComponent implements OnInit {
  dOB: DOB;
  descriptions: any[];
  constructor(
    private _dataCalculaionService: DataCalculationService
  ) {
    this.dOB = new DOB();
    this.descriptions = [];
  }

  ngOnInit(): void {
    this._dataCalculaionService.onDataChange.subscribe(dob => {
      if (dob.rulingNumber && dob.rulingNumber.number) {
        this.dOB = dob;
        this.descriptions = this.dOB.rulingNumber.descriptions;
        this.descriptions.forEach(des => des = { ...des, ...{ expanded: false } });
      } else {
        this._dataCalculaionService.calculateRulingNumber();
      }
    })
  }

}
