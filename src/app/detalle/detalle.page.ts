import { Component, OnInit } from '@angular/core';
// permite rescatar los parametros de la url :id
import { ActivatedRoute, Router } from '@angular/router';

//importar el modelo
import { Lugar } from '../lugar.model';
// importar servicios con los datos de las playas
import { LugaresService } from '../lugares.service';
// importar el componente alert control
import { AlertController } from '@ionic/angular';

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
    private router : Router,
    private alertController : AlertController
  ) { }

  ngOnInit() {
    // captura del parametro definido en el app-routing
    this.activatedRouter.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('id');
      this.playa = this.lugaresService.getLugar(Number(id));
    })
// crear un formulario para ingreso de una playa

  }

  async eliminar()
  {
    const alerta = await this.alertController.create({
      header      : "¿Está seguro de eliminar el lugar?",
      message     : "Favor confirmar la acción",
      buttons     : [
        {
          text    : "No",
          role    : "cancel"
        },
        {
          text    : "Si",
          handler : () => {
            this.lugaresService.deleteLugar(this.playa.id);
            this.router.navigateByUrl("/playas");
          }
        }
      ]
    })
    await alerta.present();
  }


} // clase ts
