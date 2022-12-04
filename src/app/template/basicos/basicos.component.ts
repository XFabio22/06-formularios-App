import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;



  initForm= {
    producto:'RTX 3050',
    precio: 0,
    existencias:0
  }

  // guardar(miFormulario:NgForm)
  guardar(){
    console.log(this.miFormulario)
    this.miFormulario.resetForm({
      producto:'',
        precio: 0,
        existencias:0
    })
    if(this.miFormulario.controls.precio.value < 0){
      console.log('no posteado');
      return
    }
  }

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid
    && this.miFormulario?.controls.producto?.touched;
  }
  PrecioValido():boolean{
    return  this.miFormulario?.controls.precio?.touched
     && this.miFormulario?.controls.precio?.value <0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
