import {
  baseCang,
  baseChi,
  baseFCungPhi,
  baseMCungPhi,
} from './lunar-constants';

export class LunarYearModel {
  year: number;
  cang: string;
  chi: string;
  mCungPhi: string;
  fCungPhi: string;

  constructor(year = 1900) {
    this.year = year;
    this.cang = baseCang[year % 10];
    this.chi = baseChi[year % 12];
    this.mCungPhi = baseMCungPhi[year % 9];
    this.fCungPhi = baseFCungPhi[year % 9];
  }
}
