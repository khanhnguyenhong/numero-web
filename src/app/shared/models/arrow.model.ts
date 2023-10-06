import { Description } from './description.model';

export class Arrow {
    name: string;
    type: ArrowTypeEnum;
    numbers: string[];
    descriptions: Description[];
    constructor(arrow?) {
        if (arrow) {
            this.name = arrow.name;
            this.type = arrow.type;
            this.numbers = arrow.numbers;
            this.descriptions = arrow.description;
        } else {
            this.name = '';
            this.numbers = ['', '', ''];
            this.descriptions = [];
        }
    }

    createNumberArray() {
        if (this.name && this.name.length) {
            this.numbers[0] = this.name.charAt(0);
            this.numbers[1] = this.name.charAt(1);
            this.numbers[2] = this.name.charAt(2);
        }
    }

    extractArrowDataFromDOBString(dob: string): void {
        if (!this.name || !this.name.length) {
            return;
        }
        for (let index = 0; index < dob.length; index++) {
            if (dob.charAt(index) === this.name.charAt(0)) {
                this.setNumber(this.name.charAt(0), 0);
            }
            if (dob.charAt(index) === this.name.charAt(1)) {
                this.setNumber(this.name.charAt(1), 1);
            }
            if (dob.charAt(index) === this.name.charAt(2)) {
                this.setNumber(this.name.charAt(2), 2);
            }
        }
        if (this.isFull()) {
            this.type = ArrowTypeEnum.POSITIVE;
        } else if (this.isEmpty()) {
            this.type = ArrowTypeEnum.NEGATIVE;
        } else {
            this.type = ArrowTypeEnum.NEUTRAL;
        }
    }
    setNumber(number: any, index: number) {
        this.numbers[index] += number;
    }
    isFull() {
        return this.numbers[0].length && this.numbers[1].length && this.numbers[2].length;
    }
    isDouble(): boolean {
        return (this.numbers[0].length > 1) && (this.numbers[1].length > 1) && (this.numbers[2].length > 1);
    }
    isEmpty(): boolean {
        return !this.numbers[0].length && !this.numbers[1].length && !this.numbers[2].length;
    }
}

export enum ArrowTypeEnum {
    POSITIVE = 'POSITIVE',
    NEGATIVE = 'NEGATIVE',
    NEUTRAL = 'NEUTRAL'
}
