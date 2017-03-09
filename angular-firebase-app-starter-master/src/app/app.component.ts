import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    cuidador$: FirebaseListObservable<any>;
    detalle$: FirebaseObjectObservable<any>;
    firstCuidador: any;
    constructor(private af: AngularFire) {
        this.cuidador$ = af.database.list('cuidador');

        this.detalle$ = af.database.object('detalle/1');


        this.cuidador$.map(cuidador => cuidador[1])
            .subscribe(
            cuidador => this.firstCuidador = cuidador
    );

    }
    listPush() {

        this.cuidador$.push({ description: 'TEST NEW CUIDADOR' })
            .then(
            () => console.log('List Push Done'),
            console.error
            );

    }

    listRemove() {

        this.cuidador$.remove(this.firstCuidador);
    }

    listUpdate() {
        this.cuidador$.update(this.firstCuidador, { description: 'Modificado' })
    }

    objUpdate() {
        this.detalle$.update({ descripcion: 'nueva descripcion' })

    }

    objSet() {
         this.detalle$.update({ descripcion: 'nueva descripcion' })
    }


}
