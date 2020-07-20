import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

// Redux Store Files
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './redux/combineReducer';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PendingTaskComponent } from './headerViews/pending-task/pending-task.component';
import { NotificationComponent } from './headerViews/notification/notification.component';
import { MycourseModule } from './views/mycourse/mycourse.module';
import { CourseModule } from './views/course/course.module';
import { MatIconModule, MatProgressBarModule } from '@angular/material';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { RegisterPageComponent } from './views/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckPasswordDirective } from './views/register-page/check-password.directive';
import { HeaderBarComponent } from './views/header-bar/header-bar.component';
import { UserprofileModule } from './views/userprofile/userprofile.module';
import { InstructorModule } from './views/instructor/instructor.module';
import { CoursemanageModule } from './views/coursemanage/coursemanage.module';
import { NotificationModule } from './views/notification/notification.module';
import { PurchaseModule } from './views/purchase/purchase.module';
import { CropModule } from './views/crop/crop.module';
import { CartModule } from './views/cart/cart.module';
import { UnsubCourseModule } from './views/unsub-course/unsub-course.module';
import { GiftModule } from './views/gift/gift.module';

@NgModule({
  imports: [
    NgReduxModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    MycourseModule,
    CourseModule,
    // UserModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    UserprofileModule,
    InstructorModule,
    CoursemanageModule,
    MatProgressBarModule,
    NotificationModule,
    PurchaseModule,
    CropModule,
    CartModule,
    AppSidebarModule,
    UnsubCourseModule,
    GiftModule
    
    
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    PendingTaskComponent,
    NotificationComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CheckPasswordDirective,
    HeaderBarComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
}
 }
