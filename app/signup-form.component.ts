import {Component} from '@angular/core';
import {   FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {UsernameValidators} from './usernameValidator';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {

    form: FormGroup;
    constructor(fb:FormBuilder){        //This is using FormBuilder
        //  this.form = fb.group({
        //     username: ['',Validators.required],
        //     password: ['',Validators.required]
        // })
        
         this.form = fb.group({
            username: ['',Validators.compose([
                    Validators.required, 
                    UsernameValidators.cannotContainSpace
                    ]), UsernameValidators.shouldBeUnique],         //3rd element in the array is asynchonous validator.
            password: ['',Validators.required]
        })
    }
    // form = new FormGroup({                   //This is using FormGroup & FormControl
    //     username: new FormControl('', Validators.required),
    //     password: new FormControl('', Validators.required)

    // });

    signup(){
        console.log(this.form.value);
    }
}