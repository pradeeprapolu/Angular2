import { FormControl } from '@angular/forms';

export class UsernameValidators {
    
    static shouldBeUnique(control: FormControl){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value == "mosh")
                    resolve({ shouldBeUnique: true})
                else
                    resolve(null);
            }, 1000);
        });
    }

    static cannotContainSpace(control: FormControl) {

        if(control.value.indexOf(' ') >=0 ){
            return {cannotContainSpace: true};      //in case if it has spaces
         
        }
        return null;   //in case no spaces. I.e validation successful
        
    }
}