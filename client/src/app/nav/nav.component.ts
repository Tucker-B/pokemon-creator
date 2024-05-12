import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Observable, of } from 'rxjs';
import { IAccountApiResponse } from '../types/Account';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(readonly accountService: AccountService) { }

  ngOnInit(): void {
    if (this.accountService.getUserBearerToken() && this.accountService.getUserName()) {
      this.setCurrentAccount();
    }
  }

  setCurrentAccount(): void {
    const userToken = this.accountService.getUserBearerToken();
    const userName = this.accountService.getUserName();

    if ((!userToken) || (!userName)) {
      return;
    }
    const user: IAccountApiResponse = {
      userName: userName,
      token: userToken
    }

    this.accountService.setCurrentAccount(user);
  }
}
