import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Daily Q&A Digest' },
      { item_id: 2, item_text: 'Lecture Ready Emails' },
      
    ];
    this.selectedItems = [
     
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }
}
