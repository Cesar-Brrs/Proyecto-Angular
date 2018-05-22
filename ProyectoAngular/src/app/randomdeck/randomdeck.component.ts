import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-randomdeck',
  templateUrl: './randomdeck.component.html',
  styleUrls: ['./randomdeck.component.css']
})

export class RandomdeckComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: ServicioService) {
  }

  public mis_cartas_aleatorias;

  ngOnInit() {
    this.servicio.buscadorAlea().subscribe(cartasAleatorias => {
      this.mis_cartas_aleatorias = cartasAleatorias;
      console.log(this.mis_cartas_aleatorias);
    })

  }

}
