import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from '../../reusables/progress-bar/progress-bar.component';
import { TabsComponent } from '../../reusables/tabs/tabs.component';

@Component({
  selector: 'app-control-statement',
  imports: [CommonModule, FormsModule, ProgressBarComponent, TabsComponent],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {


  divVisible:boolean =false;
  isChecked:boolean = false;
  dayName:string ='';
  currentTab:string ='';

  cityList:string []=[
    'Bangalore',
    'Mumbai',
    'Chennai',
    'Delhi',
    'Kolkata'
  ];
  employeeArray:any[]=[
    {id:1,name:'John',age:25 ,city:'Tokyo', contact:'12334432', },
    {id:2,name:'Anna',age:30 ,city:'New York', contact:'12334432', },
    {id:3,name:'Peter',age:35 ,city:'London', contact:'12334432', },
    {id:4,name:'Linda',age:40 ,city:'Paris', contact:'12334432', },
    {id:5,name:'Tom',age:45 ,city:'Sydney', contact:'12334432', }
  ];

  hideShowDiv(isShow:boolean){
    this.divVisible = isShow;
  }

  onTabChange(tabName:string){
    this.currentTab = tabName;
  }

}
