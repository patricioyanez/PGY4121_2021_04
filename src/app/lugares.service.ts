import { Injectable } from '@angular/core';
import {Lugar} from './lugar.model'
@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  private lugares: Lugar[] =
  [
    {
      id        : 1,
      nombre    : 'Playa Blanca',
      imagenUrl : 'https://www.diariolaregion.cl/wp-content/uploads/2019/01/6-9.jpg',
      comentario: 'playa tranquila de la 4ta región sin problemas de acceso'
    },
    {
      id        : 2,
      nombre    : 'Bahia Inglesa',
      imagenUrl : 'https://i3.visitchile.com/img/GalleryContent/237/slider/bahia_inglesa.jpg',
      comentario: 'Playa de la 4ta región, acceso disponible, restorantes a un costado de la playa'
    },
    {
      id        : 3,
      nombre    : 'puchuncavi',
      imagenUrl : 'https://www.terram.cl/carbon/wp-content/uploads/sites/2/2018/03/Ventanas-Puchuncavi-Foto-El-Ciudadano.jpg',
      comentario: 'Playa con problemas de empresas'
    }
  ]
  constructor() { }
// CRUD de playas
  getLugares(){ return this.lugares}
  
  getLugar(id:number)
  {
    return this.lugares.find( x => { return x.id == id})
  }
  deleteLugar(id: number){
    this.lugares = this.lugares.filter( x=> {return x.id != id})
  }  
  addLugar(nombre: string, imagenUrl: string, comentario: string)
  {
    this.lugares.push({
      id        : (this.lugares.length + 1),
      nombre    : nombre,
      imagenUrl : imagenUrl,
      comentario: comentario
    })
  }
}
