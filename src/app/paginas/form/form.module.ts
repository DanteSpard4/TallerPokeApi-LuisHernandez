import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormPage } from './form.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
    ComponentesModule,
    HttpClientModule
  ],
  declarations: [FormPage]
})
export class FormPageModule {}
