import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from '../producto.interface.ts/producto.interface';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoProducto: Producto;

  @Output() productoCreado: EventEmitter<Producto>;

  constructor() {
    this.nuevoProducto = {};
    this.productoCreado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.nuevoProducto.comprado = false;
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto = {};
  }
}
