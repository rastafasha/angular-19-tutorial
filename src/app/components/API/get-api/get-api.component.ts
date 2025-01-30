import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Pipe } from '@angular/core';
import { TabsComponent } from '../../../reusables/tabs/tabs.component';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule, TabsComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any []=[];
  productList: any []=[];
  currentTab:string ='';

  constructor(private http: HttpClient) {

   }

   getUsers(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (resp:any) => {
        this.userList = resp;
      }
    )
   }

   getProducts(){
    this.http.get('https://fake-store-api.mock.beeceptor.com/api/products').subscribe(
      (resp:any) => {
        this.productList = resp;
        }
        )
   }

   onTabChange(tabName:string){
    this.currentTab = tabName;
  }

  

}
