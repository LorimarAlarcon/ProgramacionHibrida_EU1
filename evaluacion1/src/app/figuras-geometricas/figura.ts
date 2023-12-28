export abstract class FiguraGeometrica {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    abstract calcularPerimetro(): number;
  }
  
export class Circulo extends FiguraGeometrica {
    radio: number;
  
    constructor(nombre: string, radio: number) {
      super(nombre);
      this.radio = radio;
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }

  export class Triangulo extends FiguraGeometrica {
    ladoA: number;
    ladoB: number;
    ladoC: number;
  
    constructor(nombre: string, ladoA: number, ladoB: number, ladoC: number) {
      super(nombre);
      this.ladoA = ladoA;
      this.ladoB = ladoB;
      this.ladoC = ladoC;
    }
  
    calcularPerimetro(): number {
      return this.ladoA + this.ladoB + this.ladoC;
    }
  }
  