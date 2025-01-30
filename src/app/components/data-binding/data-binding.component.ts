import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ProgressBarComponent } from '../../reusables/progress-bar/progress-bar.component';
import { TabsComponent } from '../../reusables/tabs/tabs.component';
@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, ProgressBarComponent, TabsComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  customerTabs: string[]=[
    'Basic',
    'Advanced',
    'Expert'
    
  ];

  firstName:string='Malcolm';
  lastName:string ='Cordova';
  rollNo:number = 123;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder:string = 'Enter full Name';
  divClassName:string = "bg-primary";
  selectedCity: string = '';
  
  constructor(){
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMessagge(){
    alert('Welcome to Angular 19')
  }

  onCityChange(){
    console.log('City Change');
  }

}
