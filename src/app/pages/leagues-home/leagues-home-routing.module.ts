import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaguesHomePage } from './leagues-home.page';

const routes: Routes = [
  {
    path: '',
    component: LeaguesHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaguesHomePageRoutingModule {}
