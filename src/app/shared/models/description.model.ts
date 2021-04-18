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

export class FlexibleDescription extends Description {
    flexibleType: string;
    constructor(description) {
        super(description);
        if (description && description.flexibleType) {
            this.flexibleType = description.flexibleType;
        }
    }
}

export enum DescriptionTypeEnum {
    OVERVIEW = 'GIỚI THIỆU',
    LIFE_PATH = 'MỤC ĐÍCH SỐNG',
    UNIQUE = 'THỂ HIỆN TỐT NHẤT',
    PROS = 'NHỮNG ĐẶC ĐIỂM NỔI BẬT',
    CONS = 'NHỮNG KHUYNH HƯỚNG TIÊU CỰC CẦN KHẮC PHỤC',
    RECOMMENDATION = 'NHỮNG ĐỀ XUẤT PHÁT TRIỂN',
    CAREER = 'NGHỀ NGHIỆP THÍCH HỢP',
    SUMMARY = 'TÓM LƯỢC',
    UNCLASSIFIED = ' '
}