import { Injectable } from '@angular/core';
import { AsyncValidator, ValidationErrors,AbstractControl } from "@angular/forms";
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{

    validate(control : AbstractControl): Observable<ValidationErrors | null>{
        
        const email = control.value;
        console.log("🚀 ~ file: email.vlidator.service.ts:11 ~ EmailValidator ~ validate ~ email:", {email})

        return of({
            emailTaken: true
        })
    }
    
}