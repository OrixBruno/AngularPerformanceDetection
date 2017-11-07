import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  @Input() alunos: Observable<any[]>;
  @Output() refreshLista = new EventEmitter();

  carregar() {
    this.refreshLista.emit();
  }
  
}
