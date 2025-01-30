import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, NgIf, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  
  divVisible: boolean =false;
  number1: string = '';
  number2: string = '';

  hideDiv(){
    this.divVisible = false;
  }
showDiv(){
  this.divVisible = true;
}
}
