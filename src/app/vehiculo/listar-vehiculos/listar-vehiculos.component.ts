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
  totalRenault: number = 0;
  totalChevrolet: number = 0;
  totalNissan: number = 0;

  constructor(private servicioVehiculo: VehiculoService) { }

  ngOnInit() {
    this.getListaVehiculos();
  }

  getListaVehiculos() {
    
    this.servicioVehiculo.getListaVehiculos().subscribe(vehiculos => {
      this.vehiculos = vehiculos;
      this.contarMarcas();
    })
  }

  contarMarcas(){
    this.totalRenault=0;
    this.totalChevrolet=0;
    this.totalNissan=0;
    console.log(this.vehiculos)
    for (let i = 0; i < this.vehiculos.length; i++) {
      const vehiculo = this.vehiculos[i];
        if(vehiculo.marca == "Renault"){
          this.totalRenault+=1;
        }
        else if(vehiculo.marca == "Chevrolet"){
          this.totalChevrolet+=1;
        }
        else if(vehiculo.marca == "Nissan"){
          this.totalNissan+=1;
        }
    }
  }

}
