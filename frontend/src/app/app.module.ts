import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { FormTransaccionComponent } from './components/form-transaccion/form-transaccion.component';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';
import { ListProductoComponent } from './components/list-producto/list-producto.component';
import { ListTransaccionComponent } from './components/list-transaccion/list-transaccion.component';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormProductoComponent,
    FormTransaccionComponent,
    FormTicketComponent,
    ListProductoComponent,
    ListTransaccionComponent,
    ListTicketComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
