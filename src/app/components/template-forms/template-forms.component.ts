import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  imports: [FormsModule, NgIf],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {


  userObj: any = {
    firstName:'',
    lastName:'',
    email:'',
    city:'',
    userName:'',
    state:'',
    zipCode:'',
    isTermsAgreed:false
  }

  onSave(){
    const formVaule = this.userObj;
  }

}
