import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    userName: new FormControl('', [Validators.email, Validators.required]),
    city: new FormControl(''),
    state: new FormControl('Caracas'),
    zipCode: new FormControl(''),
    isAgree: new FormControl(false),

    });

    constructor(){
      this.userForm.controls['state'].disable();
      setTimeout(()=>{
        this.userForm.controls['state'].enable();

      },5000);
      const isValid = this.userForm.valid;
    }

    onUserSave(){
      const formValue = this.userForm.value;
      console.log(formValue);
    }
}
