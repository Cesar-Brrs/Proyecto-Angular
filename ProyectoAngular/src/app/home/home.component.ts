import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  hero = 'Windstorm';
  constructor(public miservicio: ServicioService) { }

  public variable_clan;

  ngOnInit() {
  }

  peticionClan(){
    console.log('Antes de suscribirse')
    this.miservicio.buscadorClan().subscribe(resultado => {
      console.log('Este es el resultado que da la petición', resultado)
      this.variable_clan = resultado;

    });
  }


}
