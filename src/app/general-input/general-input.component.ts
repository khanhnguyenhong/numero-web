import { Component, OnInit } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DataCalculationService } from '../core/services/data-calculation.service';

@Component({
  selector: 'app-general-input',
  templateUrl: './general-input.component.html',
  styleUrls: ['./general-input.component.scss']
})
export class GeneralInputComponent implements OnInit {
  hasDOB: boolean;
  inputDate: Date;

  constructor(private _dataCalculaionService: DataCalculationService) {
    this.inputDate = null;
    this.hasDOB = false;
  }

  ngOnInit(): void {
  }

  storeDOB() {
    if (this.inputDate) {
      this.hasDOB = true;
      const dateString = '' + this.inputDate.getDate() + (this.inputDate.getMonth() + 1) + this.inputDate.getFullYear();
      console.log('dateString', dateString);
    }
  }

}
