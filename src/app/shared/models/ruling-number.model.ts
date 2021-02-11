import { ThrowStmt } from "@angular/compiler";
import { Description } from "./description.model";

export class RulingNumber {
    id: number;
    number: number;
    descriptions: Description[];

    constructor(number?) {
        if (number) {
            this.id = number.id;
            this.number = number.number;
            this.descriptions = number.descriptions;
        } else {
            this.id = 0;
            this.number = 0;
            this.descriptions = [];
        }
    }
}