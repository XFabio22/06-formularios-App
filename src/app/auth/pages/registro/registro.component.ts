import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.ValidatorService.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.ValidatorService.emailPattern)]],
    username:['',[Validators.required,this.ValidatorService.noPuedeStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required,]]
  },
  { 
    //AbstractControlOptions
    Validators:[this.ValidatorService.camposIguales('password','password2')]
  }
  
  )

  constructor(private fb:FormBuilder , private ValidatorService:ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Fabio Aguilar',
       email:'fabioahsdhash2@gmail.com',
      username:'FABIOjkodsf'  
      
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
    
  }
}
