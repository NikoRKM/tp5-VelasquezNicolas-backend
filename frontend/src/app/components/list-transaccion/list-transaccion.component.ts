import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-list-transaccion',
  templateUrl: './list-transaccion.component.html',
  styleUrls: ['./list-transaccion.component.css']
})
export class ListTransaccionComponent implements OnInit {

  transacciones: Array<Transaccion>;
  email: string;
  monedaOrigen: string;
  monedaDestino: string;
  constructor(private transaccionService: TransaccionService) {
    this.transacciones = new Array<Transaccion>();
    this.email = "";
    this.monedaOrigen = "";
    this.monedaDestino = "";
  }

  ngOnInit(): void {
    this.verTransacciones();
  }

  public verTransacciones() {
    this.transaccionService.getTransactions().subscribe(
      result => {
        console.log(result);
        this.transacciones = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  public verTransaccionesCliente() {
    if (this.email != "") {
      this.transaccionService.getClientTransactions(this.email).subscribe(
        result => {
          console.log(result);
          this.transacciones = result;
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.verTransacciones();
    }
  }

  public verTransaccionesMoneda() {
    if (this.monedaOrigen != "" && this.monedaDestino != "") {
      this.transaccionService.getCurrencyTransactions(this.monedaOrigen, this.monedaDestino).subscribe(
        result => {
          console.log(result);
          this.transacciones = result;
        },
        error => {
          console.log(error);
        }
      );
    } else if (this.monedaOrigen == "" && this.monedaDestino == "") {
      this.verTransacciones();
    } else {
      alert("Ingrese la moneda de Origen y de Destino");
    }
  }

}
