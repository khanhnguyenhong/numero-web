import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DataCalculationService } from '../core/services/data-calculation.service';
import { DOB } from '../shared/models/DOB.model';

@Component({
  selector: 'app-general-input',
  templateUrl: './general-input.component.html',
  styleUrls: ['./general-input.component.scss']
})
export class GeneralInputComponent implements OnInit {
  hasDOB: boolean;
  inputDate: Date;

  constructor(
    private _dataCalculaionService: DataCalculationService,
    private metaTagsService: Meta
  ) {
    this.inputDate = null;
    this.hasDOB = false;
  }

  ngOnInit(): void {
    this._dataCalculaionService.onDataChange.subscribe(dob => {
      if (dob.originDate) {
        this.inputDate = dob.originDate;
        this.hasDOB = true;
      }
    });

    this.metaTagsService.addTags(
      [
        {
          property: "og:title",
          content: "Site Title"
        },
        {
          property: 'og:image:url',
          content: 'src/assets/images/cats.jpg'
        },
        {
          property: "og:description",
          content: "Site description"
        }
      ]
    );
  }

  storeDOB() {
    if (this.inputDate) {
      this.hasDOB = true;
      const dateString = '' + this.inputDate.getDate() + (this.inputDate.getMonth() + 1) + this.inputDate.getFullYear();
      let newDOB = new DOB();
      newDOB.dateString = dateString;
      newDOB.originDate = this.inputDate;
      for (let index = 0; index < dateString.length; index++) {
        const number = dateString.charAt(index);
        newDOB.birthChart.addNumber(number);
      }
      this._dataCalculaionService.storeData(newDOB);
    }
  }
}
