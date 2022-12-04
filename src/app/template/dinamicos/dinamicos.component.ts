import { Component, OnInit } from '@angular/core';

interface Persona{

  nombre:string,
  favoritos: Favorito[];
}

interface Favorito{
  id:number,
  nombreDejuego: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
  newGame:string='';

  Persona:Persona={
    nombre:'Fabio',
    favoritos:[
      {
        id:1,
        nombreDejuego:'lol'
      },
      {
      id:2,
      nombreDejuego:'valorant'}
    ]
  }
  addGame(){
    const addGameFav:Favorito  ={
      id:this.Persona.favoritos.length + 1,
      nombreDejuego:this.newGame
    }

    this.Persona.favoritos.push({...addGameFav});
    this.newGame=''; 
  }

  eliminar(index:number){
    this.Persona.favoritos.splice(index,1)
  }


  constructor() { }

  ngOnInit(): void {
  }


  guardar(){
    console.log('Formulario posteado');
    
  }
}
