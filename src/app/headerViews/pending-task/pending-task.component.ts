import { Component } from '@angular/core';
import {select } from '@angular-redux/store';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html'
})

export class PendingTaskComponent {
  @select(state => state.header.pendingTaskList) pendingTaskList;
  @select(state => state.header.pendingTaskCount) pendingTaskCount;
  @select(state => state.header.pendingTaskLink) pendingTaskLink;
}
