import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonVPage } from './pokemon-v.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonVPageRoutingModule {}
