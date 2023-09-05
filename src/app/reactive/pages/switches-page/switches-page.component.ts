import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {
public myForm : FormGroup = this.fb.group({
  gender:['M', Validators.required],
  wantNotifications:[true, Validators.required],
  termsAndConditions:[false, Validators.requiredTrue],

})
  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  public person ={
    gender:'F',
    wantNotifications:false,
  }


  //ngSumit
  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();

      return
    }

    //desentructurar o extraer un valor del formulario
    const{ termsAndConditions, ...newPerson }=this.myForm.value;

    this.person=newPerson;
    console.log("🚀 ~ file: switches-page.component.ts:40 ~ SwitchesPageComponent ~ onSave ~ newPerson:", newPerson)
    console.log(this.myForm);

    
    
  }
  
  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }
}
