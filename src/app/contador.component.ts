import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template:`
    
    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong> {{ base }} </strong> </h3>
    
    
    <button (click)="acumular(base)"> + 1 </button>

    <span> {{numero}} </span>

    <button (click)="acumular(-base)"> - 1 </button>




    
    
    `
}) 

export class ContadorComponent {

    public titulo:string = 'Contador -- App';
  numero: number = 10;

  //metodo 3

  base  :number = 5


//sumar y restart METODO 1
 // sumar() {
 //   this.numero += 1;
 // }

 // restar() {
 //   this.numero -= 1;
 // }

  //sumar y restar METODO 2

//  acumular(valor: number) {
//    this.numero+= valor;
//  }


//sumar y restar BASE 5 tarea METODO 3

    acumular(valor: number) {
      this.numero += valor;

}