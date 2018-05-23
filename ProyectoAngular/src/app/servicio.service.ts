import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ServicioService {

  constructor(public consulta: HttpClient) {
  }


  buscadorCartas(): Observable<any> {
    return this.consulta.get('http://www.clashapi.xyz/api/cards');
  }

  buscadorArenas(): Observable<any> {
    return this.consulta.get('http://www.clashapi.xyz/api/arenas');
  }

  buscadorAlea(): Observable<any> {
    return this.consulta.get('http://www.clashapi.xyz/api/random-deck');
  }

  buscadorLigas(): Observable<any> {
    return this.consulta.get('http://www.clashapi.xyz/api/leagues');
  }

  buscadorCofres(): Observable<any> {
    return this.consulta.get('http://www.clashapi.xyz/api/chests');
  }
}
