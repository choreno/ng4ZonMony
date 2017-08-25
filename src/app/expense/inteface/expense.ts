export interface IExpense {

    id: number;
    folderName: string;
    subFolder: ISubFolder[];
    createdDTTM: Date;
    updatedDTTM: Date;
}

export interface ISubFolder {
    name: string;
    note: string;
    dueDate: number;
    url: string;
    isPayByCredit: boolean;
    payments: IPayment[];
    effectiveDTTM: IEffectiveDTTM[];
}

export interface IPayment {
    amount: number;
    note: string;
    paymentDTTM: Date;
    createdDTTM: Date;
    updatedDTTM: Date;
}

export interface IEffectiveDTTM {

    issuedDTTM: Date;
    expiredDTTM: Date;
}
