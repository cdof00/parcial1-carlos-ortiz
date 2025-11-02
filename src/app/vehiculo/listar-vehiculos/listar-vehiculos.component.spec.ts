/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from '../vehiculo.service';
import { AppComponent } from '../../app.component';

import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { Vehiculo } from '../vehiculo';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AppComponent, ListarVehiculosComponent],
      providers: [VehiculoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(1, "Renault", "Kangoo", "VU Express", 2001, 12000, "Negro", "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"),
      new Vehiculo(2, "Nissan", "Kangoo", "VU Express", 2001, 12000, "Negro", "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg"),
      new Vehiculo(3, "Chevrolet", "Kangoo", "VU Express", 2001, 12000, "Negro", "https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg")
    ]

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Componente tiene una tabla", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it("Tabla tiene 4 filas incluyendo el encabezado", () => {
    expect(debug.query(By.css("tr")).childNodes.length).toBe(4);
  });

});
