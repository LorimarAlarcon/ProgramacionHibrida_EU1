import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonText, IonCard } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Triangulo } from '../figura';
import { CommonModule } from '@angular/common';
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonList, IonItem, IonInput, IonButton, IonText, 
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonImg, IonCol,
    IonGrid, IonRow]
})

export class TrianguloComponent  implements OnInit {

  ladoAStr = ""
  ladoBStr = ""
  ladoCStr = ""
  perimetro = 0
  triangulo = new Triangulo("triangulo", 0, 0, 0)
  resultado:string = ""

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    this.triangulo.ladoA = parseFloat(this.ladoAStr);
    this.triangulo.ladoB = parseFloat(this.ladoBStr);
    this.triangulo.ladoC = parseFloat(this.ladoCStr);
    this.perimetro = this.triangulo.calcularPerimetro();
  }

  perimetroValido() {
    return !isNaN(this.perimetro)
  }
}
