import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {

  prom: number;
  situacion : string;
  constructor() { }

  ngOnInit() {
  }

  promediar(n1 : HTMLInputElement,
    n2 : HTMLInputElement,
    n3 : HTMLInputElement)
    
  {//30 40 30
    let res = Number(n1.value) +
              Number(n2.value) +
              Number(n3.value);
    this.prom = res / 3;
    if (this.prom < 55) {
      this.situacion = "A examen";
    } else {
      this.situacion = "Eximido";
    }
  }
}
