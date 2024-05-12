import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { IAccountApiResponse, IAccountLoginApiRequest, USER_BEARER_TOKEN_LOCAL_STORAGE_KEY, USER_ID_LOCAL_STORAGE_KEY, USER_NAME_LOCAL_STORAGE_KEY } from '../types/Account'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginFailed: boolean = false;

  model: IAccountLoginApiRequest = {
    username: "",
    password: ""
  };

  constructor(private readonly accountService: AccountService, private readonly router: Router) { }

  ngOnInit(): void {

  }

  login(): void {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
        this.loginFailed = false;
        console.log(`Res: ${JSON.stringify(res)}`);
        this.router.navigate(["/team"]);
      },
      error: (err) => {
        console.log(`Error: ${JSON.stringify(err)}`);
        this.loginFailed = true;
      }
    })
  }
}
