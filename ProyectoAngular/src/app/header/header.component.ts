import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tituloprueba: "Aqui va un titulo de prueba";

  constructor() {
  }

  public variable_clan;

  ngOnInit() {
  }
}
