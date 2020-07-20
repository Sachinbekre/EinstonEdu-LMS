import { Component, Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../redux/combineReducer';

@Component({
  selector: 'app-dashboard',  
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  @select(state => state.leftMenuBar.menuList) navItems;
  @select(state => state.globalSetting.showPendingTasks) showPendingTasks;
  @select(state => state.globalSetting.showNotifications) showNotifications;
  @select(state => state.globalSetting.showBreadCrumbBar) showBreadCrumbBar;
  
  public sidebarMinimized = false;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private ngRedux: NgRedux<IAppState>) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
}
