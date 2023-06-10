import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  urlBase: string = "http://localhost:3000/api/espectador";
  constructor(private _http: HttpClient) { }

  addSpectator(espectador: Espectador): Observable<any> {

    const url = "/agregarEspectador";

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      params: new HttpParams()
    };
    const body = JSON.stringify(espectador);

    return this._http.post(this.urlBase + url, body, httpOptions);

  }

  getSpectators(): Observable<any> {

    const url = "/verEspectadores";

    const httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    };

    return this._http.get(this.urlBase + url, httpOptions);

  }

  getSpectatorId(id: String): Observable<any> {

    const url = "/verEspectador/" + id;

    const httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    };

    return this._http.get(this.urlBase + url, httpOptions);

  }
  
}
