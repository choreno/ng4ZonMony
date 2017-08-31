import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IExpense } from '../inteface/expense';
import { PaymentType } from '../enum/payment-type.enum';

export class ExpenseDb implements InMemoryDbService {

    createDb() {

        let expenses: IExpense[] = [

            {
                id: 1,
                folderName: 'Housing',
                subFolders: [
                    {
                        name: 'Mortgage',
                        note: 'Garison Way #xx, Fixed x.x%, 30 yrs',
                        dueDate: 30,
                        url: 'http://wellsfargo.com',
                        payments: [
                            {
                                amount: 1600.39,
                                note: 'well, regularly...',
                                paymentDTTM: new Date('1/1/2016'),
                                createdDTTM: new Date('1/1/2016'),
                                updatedDTTM: new Date('1/1/2016'),
                            },
                            {
                                amount: 1599.09,
                                note: 'Feb',
                                paymentDTTM: new Date('2/1//2016'),
                                createdDTTM: new Date('2/1//2016'),
                                updatedDTTM: new Date('2/1//2016'),
                            },
                        ],
                        paymentTypes: [
                            {
                                type: PaymentType.online,
                                startDTTM: new Date('1/1/2016'),
                                endDTTM: null
                            },
                        ],
                        effectiveDTTMs: [
                            {
                                issuedDTTM: new Date('5/3/2011'),
                                expiredDTTM: null
                            }
                        ],
                    },
                    {
                        name: 'HOA',
                        note: 'Home Owner Association',
                        dueDate: 30,
                        url: null,
                        payments: [
                            {
                                amount: 81,
                                note: 'well, regularly...',
                                paymentDTTM: new Date('1/1/2016'),
                                createdDTTM: new Date('1/1/2016'),
                                updatedDTTM: new Date('1/1/2016'),
                            },
                            {
                                amount: 81,
                                note: 'Feb',
                                paymentDTTM: new Date('2/1//2016'),
                                createdDTTM: new Date('2/1//2016'),
                                updatedDTTM: new Date('2/1//2016'),
                            },
                        ],
                        paymentTypes: [
                            {
                                type: PaymentType.check,
                                startDTTM: new Date('1/1/2016'),
                                endDTTM: null
                            },
                        ],

                        effectiveDTTMs: [
                            {
                                issuedDTTM: new Date('5/3/2011'),
                                expiredDTTM: null
                            }
                        ],
                    },

                ],
                createdDTTM: new Date('1/1/2016'),
                updatedDTTM: new Date('1/1/2016'),
            },
            {
                id: 2,
                folderName: 'Utility',
                subFolders: [
                    {
                        name: 'GRU',
                        note: 'The eletric power provider in Gainesville',
                        dueDate: 30,
                        url: 'http://www.gru.com',
                        payments: [
                            {
                                amount: 194.01,
                                note: 'well, electric shock !!!!',
                                paymentDTTM: new Date('1/1/2016'),
                                createdDTTM: new Date('1/1/2016'),
                                updatedDTTM: new Date('1/1/2016'),
                            }

                        ],
                        paymentTypes: [
                            {
                                type: PaymentType.creditcard,
                                startDTTM: new Date('1/1/2016'),
                                endDTTM: null
                            },
                        ],

                        effectiveDTTMs: [
                            {
                                issuedDTTM: new Date('5/3/2011'),
                                expiredDTTM: null
                            }
                        ],
                    },
                ],
                createdDTTM: new Date('1/1/2016'),
                updatedDTTM: new Date('1/1/2016'),
            },
            {
                id: 3,
                folderName: 'Credit Card',
                subFolders: [
                    {
                        name: 'Chase Freedom Card',
                        note: 'Chase',
                        dueDate: 15,
                        url: 'http://chase.com',
                        payments: [
                            {
                                amount: 2845.03,
                                note: '#5666',
                                paymentDTTM: new Date(),
                                createdDTTM: new Date(),
                                updatedDTTM: new Date(),
                            }

                        ],
                        paymentTypes: [
                            {
                                type: PaymentType.online,
                                startDTTM: new Date('1/1/2016'),
                                endDTTM: null
                            },
                        ],
                        effectiveDTTMs: [
                            {
                                issuedDTTM: new Date('5/3/2010'),
                                expiredDTTM: new Date('7/3/2010')
                            },
                            {
                                issuedDTTM: new Date('10/3/2010'),
                                expiredDTTM: new Date('12/3/2010')
                            },
                            {
                                issuedDTTM: new Date('4/3/2011'),
                                expiredDTTM: null
                            }
                        ],
                    },
                ],
                createdDTTM: new Date(),
                updatedDTTM: new Date(),
            },

        ];
        return { expenses };
    }



}