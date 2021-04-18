import { FlexibleDescription } from "./description.model";

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

export class ChartCharacterNumber {
    character: string;
    number: number;

    constructor(character: string) {
        if (character && character.length) {
            this.character = character;
            this.convert();
        }
    }

    convert() {
        const code = this.character.charCodeAt(0);
        if (code > 114 && code < 123) {
            this.number = code - 114;
        } else if (code > 105 && code <= 114) {
            this.number = code - 105;
        } else if (code > 96 && code <= 105) {
            this.number = code - 96;
        }
    }
}