import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() tabList: string[]=[];

  @Output() onTableClicked = new EventEmitter<string>();

  currentTab:string = '';

  constructor(){
    this.currentTab = this.tabList[0];
  }

  onTableChange( tabname: string){
    this.currentTab = tabname;
    this.onTableClicked.emit(tabname);
  }

}
