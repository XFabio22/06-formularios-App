import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.ValidatorService.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.ValidatorService.emailPattern)], [this.EmailValidatorService]],
    username:['',[Validators.required,this.ValidatorService.noPuedeStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required,]]
  },
  { 
    //AbstractControlOptions
    Validators:[this.ValidatorService.camposIguales('password','password2')]
  }
  
  )

 
  get emailErrorMsg():string {
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.required){
      return 'Email es obligatorio'
    }else if (errors?.pattern){
      return 'El valor no tiene formato email'
    }else if (errors?.emailTomado){ //errors?.emailTomado (esto proviene de el service emailValidator)
      return 'El email ya fue tomado'
    }
    return  ''
  }


  constructor(
    private fb:FormBuilder ,
     private ValidatorService:ValidatorService,
     private EmailValidatorService:EmailValidatorService
     ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Fabio Aguilar',
      email:'fabioahsdhash2@gmail.com',
      username:'FABIOjkodsf',
      password:'123456',
      password2:'123456'

      
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }
  emailRequired(){
    return this.miFormulario.get('email')?.errors?.invalid
    && this.miFormulario.get('email')?.touched;
  }
  emailFormato(){
    return this.miFormulario.get('email')?.errors?.pattern
    && this.miFormulario.get('email')?.touched;
  }

  emailTomado(){
    return this.miFormulario.get('email')?.errors?.emailTomado
    && this.miFormulario.get('email')?.touched;
  }


  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
    
  }
}
