import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
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
import { MatTooltipModule, MatCardModule, MatTabsModule, MatStepperModule, MatInputModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

/** Import Alyle UI */
// import {
//   LyThemeModule,
//   LY_THEME
// } from '@alyle/ui';

/** Import the component modules */
// import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { ImageCropperModule } from 'ngx-image-cropper';

/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
@NgModule({
  declarations: [AccountComponent, MainboardComponent, PublicProfileComponent, PhotoComponent, PayoutSettingComponent, PrivacyComponent, NotificationComponent, ApiclientsComponent, CloseAccountComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    MatTooltipModule,
    MatCardModule,
    ModalModule.forRoot(),
    MatTabsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    QuillModule,
    // LyThemeModule.setTheme('minima-light'),
    // LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    // ImageCropperModule
  ],
  // providers: [
  //   { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
  //   { provide: LY_THEME, useClass: MinimaDark, multi: true } // name: `minima-dark`
  // ]
})
export class UserprofileModule { }
