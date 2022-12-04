import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero:['Masculino',Validators.required],
    notificaciones:[true,Validators.required],
    terminos: [false,Validators.requiredTrue]
  })

  persona = {
    genero:'Femenino',
    notificaciones:true,
  }  
  constructor( private  fb:FormBuilder) { }

 ngOnInit(){

   this.miFormulario.reset({...this.persona,terminos:false })
   this.miFormulario.valueChanges.subscribe(({terminos,...rest} )=> { //quitar eso de el pbj persona
    // delete form.terminos;
    console.log(rest);
    this.persona = rest;
    
   })
 }

 guardar(){
  const formValue = {...this.miFormulario.value};
  delete formValue.terminos;

  this.persona = formValue;
  console.log(formValue);
  
 }
}