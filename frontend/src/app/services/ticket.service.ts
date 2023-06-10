import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  urlBase: string = "http://localhost:3000/api/ticket";
  constructor(private _http: HttpClient) { }

  addTicket(ticket: Ticket): Observable<any> {
    
    const url = "/agregarTicket";

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      params: new HttpParams()
    };
    const body = JSON.stringify(ticket);

    return this._http.post(this.urlBase + url, body, httpOptions);

  }

  getTickets(): Observable<any> {

    const url = "/verTickets";

    const httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    };

    return this._http.get(this.urlBase + url, httpOptions);

  }

  deleteTicket(id: string): Observable<any> {

    const url = "/borrarTicket/" + id;

    const httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    };

    return this._http.delete(this.urlBase + url, httpOptions);

  }

  editTicket(id: string, ticket: Ticket): Observable<any> {

    const url = "/actualizarTicket/" + id;

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      params: new HttpParams()
    };
    const body = JSON.stringify(ticket);

    return this._http.put(this.urlBase + url, body, httpOptions);

  }

  getSpectatorTickets(catEsp: string): Observable<any> {

    const url = "/verTicketsEspectador/" + catEsp;

    const httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    };

    return this._http.get(this.urlBase + url, httpOptions);

  }

  getTicket(id: string): Observable<any> {

    const url = "/verTicket/" + id;

    const httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    };

    return this._http.get(this.urlBase + url, httpOptions);

  }
  
}
