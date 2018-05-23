import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css']
})
export class ChestComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: ServicioService) { }

  public mis_cofres;

  ngOnInit() {
    this.servicio.buscadorCofres().subscribe(cofres => {
      this.mis_cofres = cofres;
      console.log(this.mis_cofres);
    })

  }

}
