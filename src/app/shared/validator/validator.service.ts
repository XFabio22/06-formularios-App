import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

public  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


 noPuedeStrider(control:FormControl):ValidationErrors| null  {
  console.log(control.value);
  const valor:string = control.value?.trim().toLowerCase();

  if( valor === 'strider'){
    return{
      noStrider:true
    }
  }
  return null
}


// en las versiones actuales funciana a medias por tipado etc... pero es un ejemplo muy bueno

//TODO: Buscar una validacion funcional para validar dos contraseñas angular.15
camposIguales(campo1:string, campo2:string){
  return (formGroup:AbstractControl):ValidationErrors | null=>{

    const pass1 = formGroup.get(campo1)?.value;
    const pass2 = formGroup.get(campo2)?.value;
    console.log(pass1,pass2);
    

    if(pass1 !== pass2){
      formGroup.get(campo2)?.setErrors({noIguales:true});
      return{noIguales:true}
    }
     formGroup.get(campo2)?.setErrors(null);
    
    return null
  }
}

  constructor() { }
}
