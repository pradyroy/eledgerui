import { BorrowerData } from 'src/app/model/borrowerData';
import { UserData } from './../model/UserData';
import { LENDER_URL, CUSTOMER_URL } from './../static/properties';
import { EledgerApiService } from './../services/eledgerapi.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class EledgerUser extends EledgerApiService {

    getEledgerLenders(customUrl: string): Observable<any> {
        let url = LENDER_URL + customUrl;
        return this.get(url);
    }

    postEledgerLenders(userData: UserData): Observable<any> {
        return this.postUser(LENDER_URL, userData);
    }

    getAllEledgerCustomers(customUrl: string): Observable<any> {
        let url = CUSTOMER_URL + customUrl;
        return this.get(url);
    }

    postBorrower(borrowerData: BorrowerData): Observable<any> {
        return this.postUser(CUSTOMER_URL, borrowerData);
    }

    getBorrowers(): Observable<any> {
        return this.get(CUSTOMER_URL + "/customers");
    }
}