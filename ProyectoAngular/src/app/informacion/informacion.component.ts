import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: ServicioService) {
  }

  public ligas_info;

  ngOnInit() {
    this.servicio.buscadorLigas().subscribe(ligas => {
      this.ligas_info = ligas;
      console.log(this.ligas_info);
    })

  }

}
