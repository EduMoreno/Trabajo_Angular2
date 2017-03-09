import { Component, OnInit } from '@angular/core';
import { DetallesService } from '../shared/model/detalles.service';
import {Observable} from "rxjs/Rx";
import {Detalle} from  '../shared/model/detalle';
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-detalle-cuidador',
  templateUrl: 'detalle-cuidador.component.html',
  styleUrls: ['detalle-cuidador.component.css']
})
export class DetalleCuidadorComponent implements OnInit {

  detalles: Detalle[];
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private detalleService : DetallesService) {

    }

  ngOnInit() {
   const cuidadorUrl = this.route.snapshot.params['id'];


    this.detalleService.findAllDetallesForCuidador(cuidadorUrl)
        .do(console.log)
        .subscribe(
            detalles => this.detalles = detalles
        );
  }

}
