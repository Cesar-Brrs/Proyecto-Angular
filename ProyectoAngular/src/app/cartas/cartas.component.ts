import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {


  constructor(private ruta: ActivatedRoute, private servicio: ServicioService) {
  }

  public mis_cartas;

  ngOnInit() {
    this.servicio.buscadorCartas().subscribe(cartas => {
      this.mis_cartas = cartas;
      console.log(this.mis_cartas);
    })

  }
}
