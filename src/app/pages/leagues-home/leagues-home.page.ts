import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service'

@Component({
  selector: 'app-leagues-home',
  templateUrl: './leagues-home.page.html',
  styleUrls: ['./leagues-home.page.scss'],
})
export class LeaguesHomePage implements OnInit {

  leagues

  constructor( public leagueService: LeagueService ) { }

  ngOnInit() {
    this.leagueService.getAllLeagues()
    .subscribe(
      (data) => this.leagues = data,
      (error) => console.log(error)
    )
  }

}
