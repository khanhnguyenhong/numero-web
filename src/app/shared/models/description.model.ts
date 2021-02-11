export class Description {
    id: number;
    type: DescriptionTypeEnum;
    content: string;
    constructor(description?) {
        if (description) {
            this.id = description.id;
            this.type = description.type;
            this.content = description.content;
        } else {
            this.id = 0;
            this.type = DescriptionTypeEnum.UNCLASSIFIED;
            this.content = '';
        }
    }
}

export enum DescriptionTypeEnum {
    PROS = 'PRO',
    CONS = 'CONS',
    RECOMMENDATION = 'RECOMMENDATION',
    OVERVIEW = 'OVERVIEW',
    SUMMARY = 'SUMMARY',
    UNCLASSIFIED = 'UNCLASSIFIED'
}