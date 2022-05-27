import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import {SendPin} from "../request/send-pin";
import {ValidPin} from "../request/valid-pin";
import {CreateAccount} from "../request/create-account";

@Injectable({
    providedIn: 'root'
})
export class OfferAccountService {

    constructor(private httpClient: HttpClient) {
    }

    url = environment.URL_OMNI_PIN;

    sendPin(request: SendPin): Observable<any> {
        return this.httpClient.post(`${this.url}/api/v1/pin/send`, request);
    }

    validPin(validPin: ValidPin): Observable<any> {
        return this.httpClient.post(`${this.url}/api/v1/pin/valid`, validPin);
    }

    getData(id: string): Observable<any> {
        return this.httpClient.get(`${this.url}/api/v1/data/init-data/${id}`);
    }

    createAccount(createAccount: CreateAccount): Observable<any> {
        return this.httpClient.post(`${this.url}/api/v1/account/create-account`, createAccount);
    }

}
