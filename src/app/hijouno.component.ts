import { Component } from '@angular/core';
import { ServicioComunicador } from './serviciocom.service';

@Component({
  selector: 'hijouno',
  template: `<input type="text" [(ngModel)]="mensajeh1">
  <button (click)="nuevodato()">Actualiza</button>`
})
export class HijoUno {
  mensajeh1 : string;

  constructor (private servicecom:ServicioComunicador)
  {
    this.mensajeh1 = "mensajito1";
  }

  nuevodato ()
  {
    console.log ("Nuevo dato = " + this.mensajeh1);
    this.servicecom.setNuevoMensaje (this.mensajeh1);
  }

}
