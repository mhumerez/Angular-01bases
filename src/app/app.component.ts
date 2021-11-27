import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  //template: '<span>Marcelo</span>'
  // se trabaja html en esta misma hoja
})
export class AppComponent {
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

}
