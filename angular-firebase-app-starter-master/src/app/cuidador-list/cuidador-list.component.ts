import { Component, OnInit,Input } from '@angular/core';
import { Cuidador } from  '../shared/model/Cuidador';
@Component({
  selector: 'cuidador-list',
  templateUrl: 'cuidador-list.component.html',
  styleUrls: ['cuidador-list.component.css']
})
export class CuidadorListComponent implements OnInit {

@Input()

cuidador: Cuidador[];
  constructor() { }

  ngOnInit() {
  }

}
