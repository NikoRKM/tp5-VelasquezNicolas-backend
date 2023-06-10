import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlBase: string = "http://localhost:3000/api/producto";
  constructor(private _http: HttpClient) { }

  addProduct(producto: Producto): Observable<any> {
    const url = "/agregarProducto";

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      params: new HttpParams()
    };
    const body = JSON.stringify(producto);

    return this._http.post(this.urlBase + url, body, httpOptions);

  }

  getProducts(): Observable<any> {

    const url = "/verProductos";

    const httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    };

    return this._http.get(this.urlBase + url, httpOptions);

  }

  deleteProduct(id: string): Observable<any> {

    const url = "/borrarProducto/" + id;

    const httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    };

    return this._http.delete(this.urlBase + url, httpOptions);

  }

  editProduct(id: string, producto: Producto): Observable<any> {

    const url = "/actualizarProducto/" + id;

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }),
      params: new HttpParams()
    };
    const body = JSON.stringify(producto);

    return this._http.put(this.urlBase + url, body, httpOptions);

  }

  getFeaturedProducts(): Observable<any> {

    const url = "/verProductosDestacados";

    const httpOptions = {
      headers: new HttpHeaders({
      }),
      params: new HttpParams()
    };

    return this._http.get(this.urlBase + url, httpOptions);

  }

}
