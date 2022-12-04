import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";


@Directive({
    selector:'[CustomMin][ngModel]',//para que funcione correctamente los selectores aqui puestos deben estar en la etiqueta y importar la directiva en el modulo
    providers:[{    
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true

    }]
})
export class CustomMinDirective implements Validator {
    @Input()minimo!: number;

    constructor(){    
    }

    validate(control: FormControl)  {
        const inputValue = control.value;

        return (inputValue< this.minimo)?
        {'customMin':true}: null;
        
    }
}