import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
// atributos // ts = typeScript
  nombre  : string;
  edad    : number;
  lista   : [];
  listado : [
    { 
      id : '1',
      nombre: 'Juan Fernando'
    },
    { 
      id : '2',
      nombre: 'Juan Luis'
    },
    { 
      id : '3',
      nombre: 'Juan Pedro'
    },
  ]

  constructor() {
    this.nombre = "Pedro";
    this.edad = 25;
  }

  ngOnInit() {
  }

  // metodos o eventos

}
