import { Description } from "./description.model";

export class ChartNumber {
    number: number;
    descriptions: FlexibleDescription[];

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

export class FlexibleDescription extends Description {
    flexibleType: string;
    constructor(description) {
        super(description);
        if (description && description.flexibleType) {
            this.flexibleType = description.flexibleType;
        }
    }
}