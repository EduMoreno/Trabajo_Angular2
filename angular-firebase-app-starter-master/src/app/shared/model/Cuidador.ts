
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
export class Cuidador {

    constructor(
        public $key:string,
        public apellido: string,
        public dni: string,
        public nombre: string,
        public url:string) {

    }


    static fromJson({$key, apellido, dni,nombre,url}) {
      return new Cuidador($key, apellido, dni, nombre,url);
  }

  static fromJsonArray(json : any[]) : Cuidador[] {
      return json.map(Cuidador.fromJson);
  }

}
