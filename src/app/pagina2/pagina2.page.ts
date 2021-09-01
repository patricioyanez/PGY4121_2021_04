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
  texto   : string;
  lista   : [];
  listado = [
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
    { 
      id : '2',
      nombre: 'Juan Luis'
    },
    { 
      id : '3',
      nombre: 'Juan Pedro'
    }
  ];

  constructor() {
    this.nombre = "Pedro";
    this.edad = 25;
    this.texto = "Holaaaaaaa";
    console.table(this.listado);
  }

  ngOnInit() {
  }

  // metodos o eventos

}
