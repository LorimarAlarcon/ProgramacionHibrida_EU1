import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../figuras-geometricas/circulo/circulo.component';
import { TrianguloComponent } from '../figuras-geometricas/triangulo/triangulo.component';
import { CommonModule } from '@angular/common';
import { IonSelectCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle, 
    IonContent, CirculoComponent, TrianguloComponent, CommonModule]
})
export class HomePage {

  componente:string = ""

  constructor() {}

  mostrarCompCirculo():boolean {
    return this.componente == "circulo"
  }

  mostrarCompTriangulo():boolean {
    return this.componente == "triangulo"
  }

  handleChange($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.componente = $event.detail.value
  }
}
