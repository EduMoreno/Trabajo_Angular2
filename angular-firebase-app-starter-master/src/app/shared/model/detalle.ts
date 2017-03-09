import {Cuidador} from "./Cuidador";
import {Observable} from "rxjs/Rx";

export class Detalle {

    constructor(
        public $key:string,
        public descripcion:string,
        public animal:string,
        public horas: string,
        public id_cuidador:string,
        public url:string) {

    }

    static fromJson({$key, descripcion,animal, horas, id_cuidador,url}) {
        return new Detalle($key,descripcion,animal, horas, id_cuidador, url);
    }

    static fromJsonArray(json : any[]) : Detalle[] {
        return json.map(Detalle.fromJson);
    }


}
