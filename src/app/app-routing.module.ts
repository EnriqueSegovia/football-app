import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'leagues-home',
    loadChildren: () => import('./pages/leagues-home/leagues-home.module').then( m => m.LeaguesHomePageModule)
  },
  {
    path: 'teams-home',
    loadChildren: () => import('./pages/teams-home/teams-home.module').then( m => m.TeamsHomePageModule)
  },
  {
    path: 'players-home',
    loadChildren: () => import('./pages/players-home/players-home.module').then( m => m.PlayersHomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
