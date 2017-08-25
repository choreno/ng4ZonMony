import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IExpense } from "../inteface/expense";

//Import ALL RxJS Library

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';


//Selective Import RxJs Library
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class ExpenseService {

  constructor(private _http: Http) { }

  getAllExpenses(): Observable<IExpense[]> {

    return this._http.get('api/expenses').map(x =><IExpense[]> x.json())
    .do(data => console.log('All:' + JSON.stringify(data)))
  }






}

