import { Component, OnInit, ViewEncapsulation, Directive, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material';
export interface PeriodicElement {
  filename: string;
  type: string;
  status: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {filename: "Abc", type: 'document', status: "open", date: '12/02/2019'}
  
];

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss','../../../../../node_modules/quill/dist/quill.snow.css'],
  encapsulation: ViewEncapsulation.None
})
export class CurriculumComponent implements OnInit {
  displayedColumns: string[] = ['filename', 'type', 'status', 'date'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }
  public isSelected=true;
  public content :boolean;
  public matCard = true;
  isSection = true;
  onClick(){
  this.isSelected = !this.isSelected;
  this.content = !this.content;
}
public section :boolean;
onSection(){
  this.isSection = !this.isSection;
  this.section = !this.section;
}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.curriculumData, event.previousIndex, event.currentIndex);
    console.log(event);
  }
curriculumData = [{
  "lecture":"1",
  "subject":"Introduction"
},
{
  "lecture":"2",
  "subject":"Angular Basics"
},
{
  "lecture":"3",
  "subject":"Angular Fundamentals"
},
]  
}
