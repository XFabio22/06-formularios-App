import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {



  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.minLength(3), Validators.required]],
    favoritos:this.fb.array([
      ['Lol'],
      ['Valorant']
    ],Validators.required)
})


  nuevoFavorito:FormControl =this.fb.control('',Validators.required)


  get favoritosArr(){ //con form reactivos esta es mejor forma de tomar lo valores y sin errores , as FormArray: esto se le dice parar ayudar a ts y quitar el error 
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private fb:FormBuilder) { }

  siElCampoNoesValido(obj:string){
    return this.miFormulario.controls[obj].invalid && this.miFormulario.controls[obj].touched
  }


  agregarFavorito(){
    if(this.nuevoFavorito.invalid){return};

    this.favoritosArr.push(this.fb.control(
       this.nuevoFavorito.value,Validators.required
    ));

    this.nuevoFavorito.reset();
  }


  borrar(index:number){
    this.favoritosArr.removeAt(index)//el FormArray solo admite el  removeAt y no el splice 
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario);
    
  }

  ngOnInit(): void {
  }

}
