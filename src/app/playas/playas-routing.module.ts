import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayasPage } from './playas.page';

const routes: Routes = [
  {
    path: '',
    component: PlayasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayasPageRoutingModule {}
