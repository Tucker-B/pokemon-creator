import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { IAccountApiResponse } from '../types/Account';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  currentAccount$: Observable<IAccountApiResponse | null> = of(null);

  constructor(private readonly accountService: AccountService) {

  }

  ngOnInit(): void {
    this.currentAccount$ = this.accountService.currentAccount$;
  }

}
