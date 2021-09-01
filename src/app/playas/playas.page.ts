import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../lugares.service';

@Component({
  selector: 'app-playas',
  templateUrl: './playas.page.html',
  styleUrls: ['./playas.page.scss'],
})
export class PlayasPage implements OnInit {
  playas = []
  constructor(private lugares: LugaresService) { }

  ngOnInit() {
    this.playas = this.lugares.getLugares()
  }

}
