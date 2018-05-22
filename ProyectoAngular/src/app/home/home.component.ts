import { Component, OnInit } from '@angular/core';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(public miservicio: ServicioService) { }

  public variable_clan;

  public array_De_cosas = [
    {nombre: 'A ver', id: '4'},
    {nombre: 'si', id: '3'},
    {nombre: 'me muero', id: '2345'},
    {nombre: 'de una', id: '333'},
    {nombre: 'puta vez', id: '444'},
    {nombre: 'ya cojones', id: '666'},


  ];

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
