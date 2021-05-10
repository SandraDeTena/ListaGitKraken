import { Component } from '@angular/core';
import { Producto } from './producto.interface.ts/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productosAComprar: Producto[];
  // Aquí lo estoy declarando.

  constructor() {
    this.productosAComprar = [];
  }

  onProductoCreado($event) {
    this.productosAComprar.push($event);
    console.log(this.productosAComprar);

  }
}
