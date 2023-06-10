import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductoComponent } from './components/list-producto/list-producto.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { ListTransaccionComponent } from './components/list-transaccion/list-transaccion.component';
import { FormTransaccionComponent } from './components/form-transaccion/form-transaccion.component';
import { ListTicketComponent } from './components/list-ticket/list-ticket.component';
import { FormTicketComponent } from './components/form-ticket/form-ticket.component';

const routes: Routes = [
  {path: 'list-producto', component: ListProductoComponent},
  {path: 'form-producto', component: FormProductoComponent},
  {path: 'form-transaccion', component: FormTransaccionComponent},
  {path: 'list-transaccion', component: ListTransaccionComponent},
  {path: 'list-ticket', component: ListTicketComponent},
  {path: 'form-ticket/:id', component: FormTicketComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'list-producto'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
