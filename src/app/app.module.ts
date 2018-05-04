import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServicioComunicador } from './serviciocom.service';
import { HijoUno } from './hijouno.component';
import { HijoDos } from './hijodos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HijoUno,
    HijoDos
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioComunicador],
  bootstrap: [AppComponent]
})
export class AppModule { }
