import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { PhotoComponent } from './photo/photo.component';
import { PayoutSettingComponent } from './payout-setting/payout-setting.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotificationComponent } from './notification/notification.component';
import { ApiclientsComponent } from './apiclients/apiclients.component';
import { CloseAccountComponent } from './close-account/close-account.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',component:MainboardComponent,
    children:[
      {
        path:'',component:ProfileComponent
      },
      {
        path:'publicprofile',component:PublicProfileComponent
      },
      {
        path:'photo',component:PhotoComponent
      },
      {
        path:'payoutsetting',component:PayoutSettingComponent
      },
      {
        path:'account',component:AccountComponent
      },
      {
        path:'privacy',component:PrivacyComponent
      },
      {
        path:'notification',component:NotificationComponent
      },
      {
        path:'apiclients',component:ApiclientsComponent
      },
      {
        path:'closeaccount',component:CloseAccountComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserprofileRoutingModule { }
