import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {AngularFireDatabase} from "angularfire2";
import {Cuidador} from "./Cuidador";
import {Detalle} from "./detalle";
import {FirebaseListFactoryOpts} from "angularfire2/interfaces";
@Injectable()
export class CuidadorService {

    constructor(private db: AngularFireDatabase) { }

    findAllCuidador(): Observable<Cuidador[]> {
        return this.db.list('cuidador');
    }


    findAllDetallesForCuidador(cuidadorUrl: string): Observable<Detalle[]> {

        return this.db.list('detalle', {
            query: {
                orderByChild: 'url',
                equalTo: cuidadorUrl
            }
        })

    }

}
