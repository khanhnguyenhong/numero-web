import { ThrowStmt } from "@angular/compiler";
import { Description } from "./description.model";

export class Arrow {
    type: ArrowTypeEnum;
    numbers: string[];
    descriptions: Description[];
    constructor(arrow?) {
        if (arrow) {
            this.type = arrow.type;
            this.numbers = arrow.numbers;
            this.descriptions = arrow.description;
        } else {
            this.numbers = ['', '', ''];
            this.descriptions = [];
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
}

export enum ArrowTypeEnum {
    PHYSIC = 'PHYSIC',
    MENTAL = 'MENTAL',
    SOUL = 'SOUL'
}