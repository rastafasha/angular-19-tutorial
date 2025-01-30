import { DatePipe, JsonPipe, LowerCasePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na.pipe';
import { ProgressBarComponent } from '../../reusables/progress-bar/progress-bar.component';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor, UpperCasePipe, LowerCasePipe,
    JsonPipe, DatePipe, NaPipe, ProgressBarComponent
  ],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  courseName: string = 'Angular';
  currenDate: Date = new Date();
  studentObj:any =[
    {
      id:1, name:'Rahul',city: 'Bangalore', mobile: '1234567890',

    },
  ]

  cityList: string[] = ['Tokyo', 'New York', 'London', 'Paris', 'Sydney'];
  employeeArray:any[]=[
    {id:1,name:'John',age:25 ,city:"", contact:'12334432',  attendance: 30},
    {id:2,name:'Anna',age:30 ,city:'New York', contact:'12334432', attendance: 40 },
    {id:3,name:'Peter',age:35 ,city:'London', contact:'12334432', attendance: 100 },
    {id:4,name:'Linda',age:40 ,city:'Paris', contact:'12334432', attendance: 60 },
    {id:5,name:'Tom',age:45 ,city:'Sydney', contact:'12334432', attendance: 75 }
  ]

}
