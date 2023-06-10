import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  producto: Producto;
  constructor(private productoService: ProductoService, private router: Router) {
    this.producto = new Producto;
  }

  ngOnInit(): void {
  }

  irLista() {
    this.router.navigate(['list-producto']);
  }

  public guardarProducto() {
    if (this.validar()) {
      console.log("Guardando Producto...");
      this.productoService.addProduct(this.producto).subscribe(
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
    if (this.producto.nombre == null) {
      alert("Ingrese un nombre");
      return false;
    }
    if (this.producto.descripcion == null) {
      alert("Ingrese una descripcion");
      return false;
    }
    if (this.producto.imagen == null) {
      alert("Ingrese una imagen");
      return false;
    }
    if (this.producto.precio <= 0 || this.producto.precio == null) {
      alert("Ingrese un precio mayor que 0");
      return false;
    }
    if (this.producto.stock <= 0 || this.producto.stock == null) {
      alert("Ingrese un stock mayor que 0");
      return false;
    }
    if (this.producto.destacado == null) {
      alert("Indique si es destacado o no");
      return false;
    }
    return true;
  }

}
