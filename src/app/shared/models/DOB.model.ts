import { Arrow } from "./arrow.model";
import { RulingNumber } from "./ruling-number.model";

export class DOB {
    dateString: string;
    originDate: any;
    birthChart: BirthChart;
    rulingNumber: RulingNumber;
    constructor(dob?) {
        if (dob) {
            this.dateString = dob.dateString;
            this.originDate = dob.originDate;
            this.birthChart = dob.birthChart;
            this.rulingNumber = dob.rulingNumber;
        } else {
            this.dateString = '';
            this.birthChart = new BirthChart();
            this.rulingNumber = new RulingNumber();
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