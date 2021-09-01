import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayasPageRoutingModule } from './playas-routing.module';

import { PlayasPage } from './playas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayasPageRoutingModule
  ],
  declarations: [PlayasPage]
})
export class PlayasPageModule {}
