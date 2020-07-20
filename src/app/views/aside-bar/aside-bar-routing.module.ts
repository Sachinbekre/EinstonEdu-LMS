import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsideBarOneComponent } from './aside-bar-one/aside-bar-one.component';

const routes: Routes = [
  {
    path:'',component:AsideBarOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsideBarRoutingModule { }
