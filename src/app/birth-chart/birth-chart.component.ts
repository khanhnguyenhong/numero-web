import { Component, OnInit } from '@angular/core';
import { DataCalculationService } from '../core/services/data-calculation.service';
import { Arrow, ArrowTypeEnum } from '../shared/models/arrow.model';
import { ChartNumber } from '../shared/models/chart-number.model';
import { Description } from '../shared/models/description.model';
import { DOB } from '../shared/models/DOB.model';
import { BirthChartService } from '../shared/services/birth-chart.service';

@Component({
  selector: 'app-birth-chart',
  templateUrl: './birth-chart.component.html',
  styleUrls: ['./birth-chart.component.scss']
})
export class BirthChartComponent implements OnInit {
  dOB: DOB;
  boardNumbers: number[] = [];
  chartNumbers: ChartNumber[] = [];
  arrowNameConst = [
    '123',
    '147',
    '159',
    '258',
    '357',
    '369',
    '456',
    '789'
  ]
  constructor(
    private _dataCalculaionService: DataCalculationService,
    private _birthChartService: BirthChartService) {
    this.dOB = new DOB();
  }

  ngOnInit(): void {
    this._dataCalculaionService.onDataChange.subscribe(dob => {
      if (dob) {
        this.dOB = dob;
        if (!this.dOB.arrows.length) {
          this.arrowNameConst.forEach(name => {
            const arrow = new Arrow();
            arrow.name = name;
            arrow.extractArrowDataFromDOBString(dob.dateString);
            if (arrow.type !== ArrowTypeEnum.NEUTRAL) {
              this.dOB.arrows.push(arrow);
            }
          })
        }

        this._generateBoardNumbers();
      }
    });
  }

  private _generateBoardNumbers() {
    this.boardNumbers = [];
    this.chartNumbers = [];
    const numArray = this.dOB.dateString.split('');
    numArray.forEach(num =>
      this.boardNumbers[num] = this.boardNumbers[num] ? this.boardNumbers[num] + 1 : 1
    );

    for (let index = 1; index < 10; index++) {
      if (this.boardNumbers[index]) {
        const foundNumbers = this._birthChartService.chartNumbers.filter(cN => cN.number == index);
        if (foundNumbers && foundNumbers.length) {
          this.chartNumbers.push(foundNumbers[0]);
        } else {
          this._birthChartService.getChartNumber(index).subscribe(
            response => {
              if (response) {
                this._birthChartService.storeChartNumber(response);
                this.chartNumbers.push(response);
              }
            });
        }
      }
    }
  }

}
