import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

  firstName = signal<string>('Malcolm');
  lastName = signal<string>('Doe');
  fullName = linkedSignal({
    source: this.firstName,
    computation:(newVal, prevVal)=>{
      const fullName = newVal + ' ' + this.lastName();
      return fullName;
    }
  });

  user = signal({id:'1',name:"cheetah"});
  email =linkedSignal({
    source:this.user,
    computation:user=>`${user.name+user.id}@gmail.com`,
    equal:(a:any,b:any)=>a.id === b.id
  });

  changeName(){
    this.firstName.set('John');
  }
  changeId(){
    this.user.set({id:'2',name:'Manuel'});
  }
}
