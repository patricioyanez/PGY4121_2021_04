import { Component, OnInit } from '@angular/core';
// permite rescatar los parametros de la url :id
import { ActivatedRoute, Router } from '@angular/router';

//importar el modelo
import { Lugar } from '../lugar.model';
// importar servicios con los datos de las playas
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  playa : Lugar
  constructor(
    private activatedRouter: ActivatedRoute,
    private lugaresService : LugaresService,
    private router : Router
  ) { }

  ngOnInit() {
    // captura del parametro definido en el app-routing
    this.activatedRouter.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('id');
      this.playa = this.lugaresService.getLugar(Number(id));
    })
// crear un formulario para ingreso de una playa

  }

}
