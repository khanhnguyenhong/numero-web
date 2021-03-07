import { Description } from "./description.model";

export class LifePeak {
    number: number;
    age: number;
    descriptions: Description[];

    constructor(_lifePeak?) {
        if (_lifePeak) {
            this.number = _lifePeak.number;
            this.age = _lifePeak.age;
            this.descriptions = _lifePeak.descriptions;
        } else {
            this.number = 0;
            this.age = 0;
            this.descriptions = [];
        }
    }
}