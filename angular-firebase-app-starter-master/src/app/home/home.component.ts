import { Component, OnInit,Input } from '@angular/core';
import { CuidadorService } from '../shared/model/cuidador.service';
import { Cuidador } from  '../shared/model/Cuidador';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allcuidador: Cuidador[];
  filtro: Cuidador[];
  constructor(private cuidadorService:  CuidadorService) { }

  ngOnInit() {
   this.cuidadorService.findAllCuidador()
    .do(console.log)

      .subscribe(
       cuidador => this.allcuidador = this.filtro = cuidador
    );
  }
   search(search:string){

       this.filtro= this.allcuidador.filter(cuidador => cuidador.nombre.includes(search));

   }
}
