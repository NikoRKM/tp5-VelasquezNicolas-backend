import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  productos: Array<Producto>;
  constructor(private productoService: ProductoService, private router: Router) { 
    this.productos = new Array<Producto>();
  }

  ngOnInit(): void {
    this.verProductosDestacados();
  }

  public verProductosDestacados(){
    this.productoService.getFeaturedProducts().subscribe(
      result=>{
        console.log(result);
        this.productos = result;
      },
      error=>{
        console.log(error);
      }
    );
  }

}
