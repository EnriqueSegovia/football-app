import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

   apiUrl = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getAllLeagues() {
    return this.http.get(`${this.apiUrl}/leagues`)
  }

  getLeague(id) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }
}
