import { Arrow } from "./arrow.model";
import { LifePeak } from "./life-peak.model";
import { RulingNumber } from "./ruling-number.model";

export class DOB {
    dateString: string;
    originDate: Date;
    birthChart: BirthChart;
    rulingNumber: RulingNumber;
    lifePeaks: LifePeak[];
    arrows: Arrow[];
    constructor(dob?) {
        if (dob) {
            this.dateString = dob.dateString;
            this.originDate = dob.originDate;
            this.birthChart = dob.birthChart;
            this.rulingNumber = dob.rulingNumber;
            this.lifePeaks = dob.lifePeaks;
            this.arrows = dob.arrows;
        } else {
            this.dateString = '';
            this.birthChart = new BirthChart();
            this.rulingNumber = new RulingNumber();
            this.lifePeaks = [];
            this.arrows = [];
        }
    }
}

export class BirthChart {
    chart: any[];
    arrows: Arrow[];

    constructor() {
        this.chart = [];
        this.arrows = [];
    }

    addNumber(number: string) {
        if (this.chart[number.charCodeAt(0) - 48]) {
            this.chart[number.charCodeAt(0) - 48] += number;
        } else {
            this.chart[number.charCodeAt(0) - 48] = number;
        }
    }
}