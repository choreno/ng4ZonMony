import { PaymentType } from '../enum/payment-type.enum';

export interface IExpense {

    id: number;
    folderName: string;
    subFolders: ISubFolder[];
    createdDTTM: Date;
    updatedDTTM: Date;
}

export interface ISubFolder {
    name: string;
    note: string;
    dueDate: number;
    url: string;
    payments: IPayment[];
    paymentTypes: IPaymentType[]; 
    effectiveDTTMs: IEffectiveDTTM[];
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
    expiredDTTM?: Date;
}

export interface IPaymentType {
    type: PaymentType ;
    startDTTM: Date;
    endDTTM?: Date; 

}