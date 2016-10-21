import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

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
        'username': new FormControl('username', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
      }),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl(''),
      'hobbies': new FormArray([
        new FormControl('Cooking', Validators.required)
      ])
    })
  }
  onSubmit(){
    return console.log(this.AForm);
  }

  onAddHobby(){
    (<FormArray>this.AForm.get('hobbies')).push(new FormControl('', Validators.required));
  }
}
