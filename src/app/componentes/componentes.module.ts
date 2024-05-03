import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { PieComponent } from './pie/pie.component';


@NgModule({
  declarations: [EncabezadoComponent,PieComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[
    EncabezadoComponent,
    PieComponent
  ],
})
export class ComponentesModule { }
