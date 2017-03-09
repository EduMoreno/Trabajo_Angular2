import {Route} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetallesComponent} from "./detalles/detalles.component";
import {DetalleCuidadorComponent} from "./detalle-cuidador/detalle-cuidador.component";
import {NuevoDetalleComponent} from "./nuevo-detalle/nuevo-detalle.component";

export const routerConfig : Route[] = [
  {
     path:'home',
      children: [
         {
           path:':id',
            component:DetalleCuidadorComponent

         },
         {
            path:'',
            component:HomeComponent
         }

      ]
  },
  {
     path:'detalles',
     children: [
         {
             path: '',
             component: DetallesComponent
         },
         {
           path:'new',
           component:NuevoDetalleComponent
         }
     ]

  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }



]
