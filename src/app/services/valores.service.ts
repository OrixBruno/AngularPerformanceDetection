import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptions } from "@angular/http";

@Injectable()
export class ValoresService {

  constructor(
    private http: Http
  ) { }

  getAlunos() {
    return this.http.get("/assets/alunos.json");
  }
  getAlunos2() {
    return this.http.get("/assets/alunos2.json");
  }
}
