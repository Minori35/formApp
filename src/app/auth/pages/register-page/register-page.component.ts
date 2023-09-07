import { Component } from '@angular/core';
import {FormGroup  , FormBuilder, Validators} from "@angular/forms";
import { ValidatorsService } from 'src/app/shared/services/validators.sevices';
import { EmailValidator } from 'src/app/shared/validators/email.vlidator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm : FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.pattern(this.validatorservices.firstNameAndLastnamePattern) ]],
    email: ['', [Validators.required, Validators.pattern(this.validatorservices.emailPattern)], [this.emailValidator]],
    // email: ['', [Validators.required, Validators.pattern(this.validatorservices.emailPattern)], [new EmailValidator()]],
    username: ['', [Validators.required, this.validatorservices.cantBeStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],

  });

  constructor( 
    private fb: FormBuilder,
    private validatorservices: ValidatorsService,
    private emailValidator: EmailValidator){

  }

  isValidField(field: string){
    return this.validatorservices.isValidField(this.myForm, field)
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }
}
