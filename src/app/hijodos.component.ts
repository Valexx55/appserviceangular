import { Component, OnInit } from '@angular/core';
import { ServicioComunicador } from './serviciocom.service';

@Component({
  selector: 'hijodos',
  template: `{{longuitud}}`
})
export class HijoDos implements OnInit {
  title = 'app';
  longuitud: number;


  constructor (private servicecom:ServicioComunicador)
  {
    this.longuitud = this.title.length;
  }

  ngOnInit()
  {
    this.servicecom.observadorMensaje.subscribe(mensaje_nuevo => {
      this.longuitud = mensaje_nuevo.length;
      console.log ("Ha entrado un mensaje nuevo");
    });
  }
  
}
