import 'rxjs';

import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ValoresService } from "./services/valores.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  alunos: any[];
  alunos$: Observable<any[]>;

  constructor(
    private valoresService: ValoresService,
    private ref: ChangeDetectorRef,
  ){}
  ngOnInit(): void {
    this.valoresService.getAlunos().subscribe(
      data => {
        this.alunos = data.json();
      }
    );
    this.alunos$ = Observable.interval().map(i => this.alunos);
    this.ref.detectChanges();
  }
  getAlunos2() {
    this.valoresService.getAlunos2().subscribe(
      data => {
        this.alunos = data.json();
        this.ref.detectChanges();
      }
    );
  }
}
