import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];

  constructor() { }

  ngOnInit() {
    this.getListaVehiculos();
  }

  getListaVehiculos(){

  }

}
