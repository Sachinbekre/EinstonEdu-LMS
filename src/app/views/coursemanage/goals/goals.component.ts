import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  changeText=true;
  changeCourse=true;
  changeTarget=true;
  constructor() { }

  ngOnInit() {
  }
  words1 = [];
  words2 = [];
  words3= [];
  
  add() {
    this.words1.push({value: 'gsre'});
  }
  addcourse() {
    this.words2.push({value: 'gsre'});
  }
  addtarget() {
    this.words3.push({value: 'gsre'});
  }
  delete(value){
    console.log(value);
    for(let i=0; i< this.words1.length;i++){
      console.log(i);
      if(i == value) {
      this.words1.splice(i,1);
      }
    }
    // this.words2.splice(1,value);

  }
  deletecourse(value){
    console.log(value);
    for(let i=0; i< this.words2.length;i++){
      console.log(i);
      if(i == value) {
      this.words2.splice(i,1);
      }
    }
    // this.words2.splice(1,value);

  }

  deletetarget(value){
    console.log(value);
    for(let i=0; i< this.words3.length;i++){
      console.log(i);
      if(i == value) {
      this.words3.splice(i,1);
      }
    }
    // this.words2.splice(1,value);

  }



  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    
  }
}
