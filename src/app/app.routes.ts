import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AdminComponent } from './components/admin/admin.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { LifeCicleComponent } from './components/life-cicle/life-cicle.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';

export const routes: Routes = [
    {path:'', redirectTo:'data-binding', pathMatch:'full'},
    {path:'data-binding', component: DataBindingComponent},
    {path:'admin', component: AdminComponent},
    {path:'ng-class', component: NgClassComponent},
    {path:'ng-style', component: NgStyleComponent},
    {path:'ng-for', component: NgForComponent},
    {path:'ng-if', component: NgIfComponent},
    {path:'control-flow', component: ControlStatementComponent},
    {path:'signal', component: SignalComponent},
    {path:'linked-signal', component: LinkedSignalComponent},
    {path:'template-forms', component: TemplateFormsComponent},
    {path:'reactive-forms', component: ReactiveFormsComponent},
    {path:'get-api', component: GetApiComponent},
    {path:'post-api', component: PostApiComponent},
    {path:'life-cicle', component: LifeCicleComponent},
    {path:'resource', component: ResourceApiComponent},
];
