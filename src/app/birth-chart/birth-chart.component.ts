import { Component, OnInit } from '@angular/core';
import { DataCalculationService } from '../core/services/data-calculation.service';
import { Arrow, ArrowTypeEnum } from '../shared/models/arrow.model';
import { Description } from '../shared/models/description.model';
import { DOB } from '../shared/models/DOB.model';

@Component({
  selector: 'app-birth-chart',
  templateUrl: './birth-chart.component.html',
  styleUrls: ['./birth-chart.component.scss']
})
export class BirthChartComponent implements OnInit {
  dOB: DOB;
  boardNumbers: number[] = [];
  numerExplanations: Description[] = [];
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
  constructor(private _dataCalculaionService: DataCalculationService) {
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
    const numArray = this.dOB.dateString.split('');
    numArray.forEach(num =>
      this.boardNumbers[num] = this.boardNumbers[num] ? this.boardNumbers[num] + 1 : 1
    );

    for (let index = 1; index < 10; index++) {
      //generate Definition for numbers
    }
  }

}
