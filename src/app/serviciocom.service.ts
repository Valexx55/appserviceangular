import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ServicioComunicador {

  
    private mensajeObservado = new BehaviorSubject<string>("");
    observadorMensaje = this.mensajeObservado.asObservable();
  
    constructor() { }
  
    setNuevoMensaje(message: string) {
      this.mensajeObservado.next(message);//la acutalización del estado 
      //se propaga a su observador 
    }
}