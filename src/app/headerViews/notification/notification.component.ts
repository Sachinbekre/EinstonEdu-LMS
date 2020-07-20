import { Component } from '@angular/core';
import {select } from '@angular-redux/store';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @select(state => state.header.notificationList) notificationList;
  @select(state => state.header.notificationCount) notificationCount;
  @select(state => state.header.notificationLink) notificationLink;
}
