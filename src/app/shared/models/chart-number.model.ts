import { Description } from "./description.model";

export class ChartNumber {
    number: number;
    descriptions: Description[];

    constructor(number?) {
        if (number) {
            this.number = number.number;
            this.descriptions = number.descriptions;
        } else {
            this.number = 0;
            this.descriptions = [];
        }
    }
}