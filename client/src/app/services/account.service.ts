import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAccountApiResponse, IAccountLoginApiRequest, USER_BEARER_TOKEN_LOCAL_STORAGE_KEY, USER_NAME_LOCAL_STORAGE_KEY } from '../types/Account';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = "http://localhost:5000/api";
  private currentAccountSource = new BehaviorSubject<IAccountApiResponse | null>(null);
  currentAccount$ = this.currentAccountSource.asObservable();

  constructor(private readonly http: HttpClient) { }

  login(model: IAccountLoginApiRequest) {
    return this.http.post<IAccountApiResponse>(`${this.baseUrl}/account/login`, model).pipe(
      map((res: IAccountApiResponse) => {
        const account = res;
        if (account) {
          this.setCurrentAccount(account);
          localStorage.setItem(USER_BEARER_TOKEN_LOCAL_STORAGE_KEY, account.token);
          localStorage.setItem(USER_NAME_LOCAL_STORAGE_KEY, account.userName);
        }
      })
    );
  }

  logout(): void {
    this.currentAccountSource.next(null);
    localStorage.removeItem(USER_BEARER_TOKEN_LOCAL_STORAGE_KEY);
    localStorage.removeItem(USER_NAME_LOCAL_STORAGE_KEY);
  }

  getUserBearerToken(): string | null {
    return localStorage.getItem(USER_BEARER_TOKEN_LOCAL_STORAGE_KEY);
  }

  getUserName(): string | null {
    return localStorage.getItem(USER_NAME_LOCAL_STORAGE_KEY);
  }

  setCurrentAccount(account: IAccountApiResponse | null): void {
    console.log("calling setCurrentAccount()");
    this.currentAccountSource.next(account);
  }
}
