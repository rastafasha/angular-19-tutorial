import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  imports: [],
  templateUrl: './life-cicle.component.html',
  styleUrl: './life-cicle.component.css'
})
export class LifeCicleComponent implements OnInit, 
AfterViewInit, AfterViewChecked,
AfterContentInit, AfterContentChecked, OnDestroy {

  constructor(){

  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      //viewchild, getting reference of element
  }
  ngAfterViewChecked(): void {
      
  }
  ngAfterContentChecked(): void {
      
  }
  ngAfterContentInit(): void {
      
  }
  ngOnDestroy(): void {
      alert('you are living page')
  }
}
