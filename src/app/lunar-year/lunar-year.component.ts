import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LunarYearModel } from './shared/lunar-year-model';

@Component({
  selector: 'app-lunar-year',
  templateUrl: './lunar-year.component.html',
  styleUrls: ['./lunar-year.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LunarYearComponent implements OnInit {
  dataSource = [];
  displayedColumns: string[] = ['year', 'cang', 'chi', 'mCungPhi', 'fCungPhi'];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1980; i < 2040; i++) {
      this.dataSource.push(new LunarYearModel(i));
    }
  }
}
