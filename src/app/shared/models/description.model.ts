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