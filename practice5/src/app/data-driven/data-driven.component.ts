import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
//You can always form new formgroups since formgroups are simply just a group of controls
export class DataDrivenComponent {
  AForm: FormGroup
  genders= ['male', 'female'];
  constructor(private formBuilder: FormBuilder){
    this.AForm = new FormGroup({
      'userdata': new FormGroup({
        'username': new FormControl('username', [Validators.required, this.exampleValidator]),
        'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
      }),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl(''),
      'hobbies': new FormArray([
        new FormControl('Cooking', Validators.required, this.asyncExampleValidator)
      ])
    })
  }
  onSubmit(){
    return console.log(this.AForm);
  }

  onAddHobby(){
    (<FormArray>this.AForm.get('hobbies')).push(new FormControl('', Validators.required, this.asyncExampleValidator));
  }
  /*Custom Validator, if username were to be 'Example' you will not be able to submit
    return null is essential DO NOT return false because false is boolean ONLY return null*/
  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Example') {
      return {example: true}
    }
    return null;
  }
  /*Custom Validator that is async similar to non-async
    always resolve true otherwise resolve null (return nothing)*/
  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'Example'){
            resolve({'invalid': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }
}
