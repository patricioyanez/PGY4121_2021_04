import { Component, OnInit } from '@angular/core';
// importar servicio para ingresar un nuevo valor
import { LugaresService } from '../lugares.service';
// permite devolver al usuario a la pagina playas(listado)
import { Router  } from '@angular/router';
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  constructor(private lugaresService : LugaresService,
              private router  : Router
    ) { }

  ngOnInit() {
  }

  agregar(nombre : HTMLInputElement, 
          url: HTMLInputElement, 
          comentario: HTMLInputElement)
  {
    const nom = nombre.value;
    const img = url.value;
    const com = comentario.value;

    this.lugaresService.addLugar(nom,img,com);
    this.router.navigate(['/playas']);
  }
}
