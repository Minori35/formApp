import { Injectable } from '@angular/core';
import { AsyncValidator, ValidationErrors,AbstractControl } from "@angular/forms";
import { Observable, delay, of, pipe, retry } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{

    // validate(control : AbstractControl): Observable<ValidationErrors | null>{
        
    //     const email = control.value;
    //     console.log("🚀 ~ file: email.vlidator.service.ts:11 ~ EmailValidator ~ validate ~ email:", {email})

    //     return of({
    //         emailTaken: true
    //     }).pipe(
    //         delay(2000)
    //     )
    // }

    validate(control : AbstractControl): Observable<ValidationErrors | null>{
        
        const email = control.value;

        const httpallObservable = new Observable<ValidationErrors| null>((subscriber ) =>{
            console.log({email});
            if(email=== 'sayra@gmail.com'){
                subscriber.next({emailTaken:true});
                subscriber.complete();
                // return
            }

            subscriber.next(null);
            subscriber.complete;
        })
        
        return httpallObservable
    }

  
}