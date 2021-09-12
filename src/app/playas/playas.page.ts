import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';
// permite enviar al usuario a otra pagina
import { Router } from '@angular/router';

@Component({
  selector: 'app-playas',
  templateUrl: './playas.page.html',
  styleUrls: ['./playas.page.scss'],
})
export class PlayasPage implements OnInit {
  playas = []
  constructor(private lugares: LugaresService,
              private router : Router
    ) { }

  ngOnInit() {
    this.playas = this.lugares.getLugares()
  }
  // al volver a ingresar a la pagina se recarga los datos de las playas
  // disponible en el servicio. 
  ionViewWillEnter() {
    this.playas = this.lugares.getLugares()
  }
  agregar()
  {
    this.router.navigate(['/ingresar'])
  }

}
