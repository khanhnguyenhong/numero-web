import { Component, OnInit } from '@angular/core';
import { DataCalculationService } from '../core/services/data-calculation.service';
import { DOB } from '../shared/models/DOB.model';

@Component({
  selector: 'app-birth-chart',
  templateUrl: './birth-chart.component.html',
  styleUrls: ['./birth-chart.component.scss']
})
export class BirthChartComponent implements OnInit {
  dOB: DOB;
  constructor(private _dataCalculaionService: DataCalculationService) {
    this.dOB = new DOB();
  }

  ngOnInit(): void {
    this._dataCalculaionService.onDataChange.subscribe(dob => {
      if (dob) {
        this.dOB = dob;
      }
    })
  }

}
