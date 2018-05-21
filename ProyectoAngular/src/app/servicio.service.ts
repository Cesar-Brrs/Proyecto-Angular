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

  buscadorID(dato): Observable<any> {
    return this.consulta.get("http://www.clashapi.xyz/api/cards/" + dato);
  }

  buscadorArenas(): Observable<any> {
    return this.consulta.get('http://www.clashapi.xyz/api/arenas');
  }

  buscadorAlea(): Observable<any> {
    return this.consulta.get('http://www.clashapi.xyz/api/random-deck');
  }
  buscadorClan(): Observable<any> {
    return this.consulta.get(' http://www.clashapi.xyz/api/arenas');
  }

}
