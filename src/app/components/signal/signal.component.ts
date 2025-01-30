import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  fistName = signal('Malcolm');
  lastName = signal<string>('Cordova');
  courseName:string = 'Angular 19';
  rollNo = signal<number>(0);

  constructor(){
    const value = this.fistName();
    setTimeout(()=>{
      this.courseName = 'Angular 20';
      this.fistName.set('Raul')
    }, 5000)
  }

  onIncrement(){
    this.rollNo.update(oldVaule=> oldVaule + 1);
  }

}
