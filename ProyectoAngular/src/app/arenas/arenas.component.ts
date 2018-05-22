import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.css']
})
export class ArenasComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: ServicioService) {
  }

  public mis_arenas;

  ngOnInit() {
    this.servicio.buscadorArenas().subscribe(arenas => {
      this.mis_arenas = arenas;
      console.log(this.mis_arenas);
    })

  }
}


