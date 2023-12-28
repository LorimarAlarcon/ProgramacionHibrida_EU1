import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonText, IonCard } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../figura';
import { CommonModule } from '@angular/common';
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonList, IonItem, IonInput, IonButton, IonText, 
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonImg]
  })

export class CirculoComponent  implements OnInit {

  radioStr = ""
  perimetro = 0
  circulo = new Circulo("circulo", 0)
  resultado:string = ""

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    this.circulo.radio = parseFloat(this.radioStr); // Utiliza parseFloat para permitir decimales
    this.perimetro = this.circulo.calcularPerimetro();
  }

  perimetroValido() {
    return !isNaN(this.perimetro)
  }
}

