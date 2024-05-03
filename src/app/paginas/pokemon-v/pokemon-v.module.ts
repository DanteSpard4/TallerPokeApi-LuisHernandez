import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PokemonVPageRoutingModule } from './pokemon-v-routing.module';

import { PokemonVPage } from './pokemon-v.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonVPageRoutingModule,
    ComponentesModule,
    HttpClientModule
  ],
  declarations: [PokemonVPage]
})
export class PokemonVPageModule {}
