import { Component } from '@angular/core';
import {FormGroup  , FormBuilder, Validators} from "@angular/forms";
import { ValidatorsService } from 'src/app/shared/services/validators.sevices';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm : FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.pattern(this.validatorservices.firstNameAndLastnamePattern) ]],
    email: ['', [Validators.required, Validators.pattern(this.validatorservices.emailPattern)]],
    username: ['', [Validators.required, this.validatorservices.cantBeStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],

  });

  constructor( 
    private fb: FormBuilder,
    private validatorservices: ValidatorsService){

  }

  isValidField(field: string){
    return this.validatorservices.isValidField(this.myForm, field)
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
