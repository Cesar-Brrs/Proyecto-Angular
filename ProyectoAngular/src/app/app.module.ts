import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

/*Importamos lo que necesitamos*/

import {Routes, Router, RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {InformacionComponent} from './informacion/informacion.component';
import {ContactoComponent} from './contacto/contacto.component';
import {container} from "@angular/core/src/render3/instructions";
import {config} from "rxjs/index";
import {ServicioService} from "./servicio.service";

/* Aqui pongo las rutas de los componentes que quiero que se muestren cuendo este en esa parte de la web */

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'informacion', component: InformacionComponent}
];

/* En imports ponemos lo que queremos importar */


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InformacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
