import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { EspectadorService } from 'src/app/services/espectador.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrls: ['./form-ticket.component.css']
})
export class FormTicketComponent implements OnInit {

  ticket: Ticket;
  espectadores: Array<Espectador>;
  modifica: boolean;
  constructor(private ticketService: TicketService, private espectadorService: EspectadorService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.ticket = new Ticket;
    this.espectadores = new Array<Espectador>();
    this.modifica = false;
  }

  ngOnInit(): void {
    this.ticket.fechaCompra = String(new Date().toLocaleDateString('es-ar'));
    this.cargarEspectadores();
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == '0') {
        this.modifica = false;
      } else {
        this.modifica = true;
        this.obtenerTicket(params['id']);
      }
    });
  }

  cargarEspectadores() {
    this.espectadorService.getSpectators().subscribe(
      result => {
        console.log(result);
        this.espectadores = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  irLista() {
    this.router.navigate(['list-ticket']);
  }

  obtenerTicket(id: string) {
    this.ticketService.getTicket(id).subscribe(
      result => {
        console.log(result);
        this.ticket = result;
        this.ticket.espectador = this.espectadores.find(e => e._id == this.ticket.espectador._id)!;
      },
      error => {
        console.log(error);
      }
    );
  }

  public guardarTicket() {
    if (this.validar()) {
      console.log("Guardando Ticket...");
      this.ticket.fechaCompra = String(new Date().toLocaleDateString('es-ar'));
      this.ticketService.addTicket(this.ticket).subscribe(
        result => {
          console.log(result);
          if (result.status == 1) {
            alert(result.msg);
            this.irLista();
          }
        },
        error => {
          console.log(error);
          alert(error.msg);
        }
      );
    }
  }

  public modificarTicket() {
    if (this.validar()) {
      console.log("Modificando Ticket...");
      this.ticket.fechaCompra = String(new Date().toLocaleDateString('es-ar'));
      this.ticketService.editTicket(this.ticket._id, this.ticket).subscribe(
        result => {
          console.log(result);
          if (result.status == 1) {
            alert(result.msg);
            this.irLista();
          }
        },
        error => {
          console.log(error);
          alert(error.msg);
        }
      );
    }
  }

  validar(): boolean {
    if (this.ticket.espectador == null) {
      alert("indique espectador");
      return false;
    }
    if (this.ticket.categoriaEspectador == null) {
      alert("indique categoria del espectador");
      return false;
    }
    if (this.ticket.precioTicket <= 0 || this.ticket.precioTicket == null) {
      alert("Ingrese un precio mayor que 0");
      return false;
    }
    if (this.ticket.fechaCompra == null) {
      alert("No se pudo generar fecha");
      return false;
    }
    return true;
  }

}
