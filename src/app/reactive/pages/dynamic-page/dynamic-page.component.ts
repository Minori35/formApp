import { Component } from '@angular/core';
import { FormBuilder,FormGroup ,Validators, FormArray} from "@angular/forms";
@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  // public myForm2 =new FormGroup({
  //   favoriteGame : new FormArray([

  //   ])
  // });
  public myForm : FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    favoritesGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ])
  })

  constructor (private fb : FormBuilder){}

  get favoriteGames(){
    return this.myForm.get('favoritesGames') as FormArray
  }
  onSumit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.valid);
    this.myForm.reset();
    
  }
}
