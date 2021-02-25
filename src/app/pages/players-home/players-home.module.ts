import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayersHomePageRoutingModule } from './players-home-routing.module';

import { PlayersHomePage } from './players-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersHomePageRoutingModule
  ],
  declarations: [PlayersHomePage]
})
export class PlayersHomePageModule {}
