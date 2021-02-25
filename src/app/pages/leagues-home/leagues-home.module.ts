import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaguesHomePageRoutingModule } from './leagues-home-routing.module';

import { LeaguesHomePage } from './leagues-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaguesHomePageRoutingModule
  ],
  declarations: [LeaguesHomePage]
})
export class LeaguesHomePageModule {}
