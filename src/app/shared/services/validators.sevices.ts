import { Injectable } from '@angular/core';
import { FormControl,ValidationErrors, FormGroup } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class ValidatorsService {


 public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
 public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

 public cantBeStrider=( control :  FormControl): ValidationErrors | null=>{

    const value : string = control.value.trim().toLowerCase();

    if(value ==='strider'){

        return {
    
            noStrider: true,
        }

    }

    return null

}

isValidField(form: FormGroup, field : string): boolean| null{
    return form.controls[field].errors 
          && form.controls[field].touched
  }

  isFieldOneEqualFieldTwo(field: string , field2: string){
    return (FormGroup : FormGroup) : ValidationErrors | null =>{
        const fieldValue1 = FormGroup.get(field)?.value;
        const fieldValue2 = FormGroup.get(field2)?.value;

        if(fieldValue1 !== fieldValue2){
            FormGroup.get(field2)?.setErrors({notEqual: true})
            return {notEqual : true}
        }

        FormGroup.get(field2)?.setErrors(null)

        return null;

        


    }
  }
  
}
