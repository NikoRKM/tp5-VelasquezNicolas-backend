import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-form-transaccion',
  templateUrl: './form-transaccion.component.html',
  styleUrls: ['./form-transaccion.component.css']
})
export class FormTransaccionComponent implements OnInit {

  transaccion: Transaccion;
  constructor(private transaccionService: TransaccionService, private router: Router) {
    this.transaccion = new Transaccion;
  }

  ngOnInit(): void {
    this.transaccion.cantidadDestino = 0;
  }

  irLista() {
    this.router.navigate(['list-transaccion']);
  }

  public calcularTransaccion() {
    if (this.validar()) {
      this.transaccionService.calculateTransaction(this.transaccion).subscribe(
        result => {
          console.log(result);
          this.transaccion.cantidadDestino = result.result.convertedAmount;
          this.guardarTransaccion();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  public guardarTransaccion() {
    if (this.transaccion.cantidadDestino > 0) {
      this.calcularTasaConversion();
      console.log("Guardando Transaccion...")
      this.transaccionService.addTransaction(this.transaccion).subscribe(
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
    }else{
      alert("Nose pudo generar la transaccion");
    }
  }

  public calcularTasaConversion() {
    this.transaccion.tasaConversion = this.transaccion.cantidadDestino / this.transaccion.cantidadOrigen;
    console.log("Tasa de Conversion: " + this.transaccion.tasaConversion);
  }

  validar(): boolean {
    if (this.transaccion.emailCliente == null) {
      alert("Ingrese un email");
      return false;
    }
    if (this.transaccion.cantidadOrigen <= 0 || this.transaccion.cantidadOrigen == null) {
      alert("Ingrese una cantidad mayor que 0");
      return false;
    }
    if (this.transaccion.monedaOrigen == null) {
      alert("Indique una moneda de origen");
      return false;
    }
    if (this.transaccion.monedaDestino == null) {
      alert("Indique una moneda de destino");
      return false;
    }
    return true;
  }

}
