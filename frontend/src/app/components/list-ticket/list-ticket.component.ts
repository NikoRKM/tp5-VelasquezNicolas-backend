import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  tickets: Array<Ticket>;
  categoria: string;
  constructor(private ticketService: TicketService, private router: Router) {
    this.tickets = new Array<Ticket>();
    this.categoria = "";
  }

  ngOnInit(): void {
    this.verTickets();
  }

  public verTickets() {
    this.ticketService.getTickets().subscribe(
      result => {
        console.log(result);
        this.tickets = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  public verTicketsEspectador() {
    if (this.categoria != "") {
      this.ticketService.getSpectatorTickets(this.categoria).subscribe(
        result => {
          console.log(result);
          this.tickets = result;
        },
        error => {
          console.log(error);
        }
      );
    }else{
      this.verTickets();
    }
  }

  public borrarTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket._id).subscribe(
      result => {
        console.log(result);
        if (result.status == 1) {
          alert(result.msg);
          this.verTickets();
        }
      },
      error => {
        console.log(error);
        alert(error.msg);
      }
    );
  }

  public modificarTicket(ticket: Ticket) {
    this.router.navigate(['form-ticket', ticket._id])
  }

}
