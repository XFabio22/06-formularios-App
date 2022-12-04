import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',

})
export class BasicosComponent implements OnInit{



  // miFormulario:FormGroup = new FormGroup({
  //   'nombre':new FormControl('Rtx 4080TI'),
  //   'precio':new FormControl(2222),
  //   'existencias':new FormControl(4)
  // });

  //utilizar el FormBuilder po comodidad 

  // SI son mas de 1 validador se pone entre [] asi => [Validators.required,Validators.minLength(3)]
  miFormulario:FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    precio: [ , [Validators.required,Validators.min(0)]],
    existencias:[, [Validators.required,Validators.min(0)]],
  })
  
  constructor(private fb:FormBuilder) { }
  
  ngOnInit() {
    this.miFormulario.reset({
      nombre:'rtcx',
      precio: 1700,

    })
  }



  campoNoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }
  
  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
    
  }


}
