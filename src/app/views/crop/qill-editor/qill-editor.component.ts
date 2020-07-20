import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-qill-editor',
  templateUrl: './qill-editor.component.html',
  styleUrls: ['./qill-editor.component.scss','../../../../../node_modules/quill/dist/quill.snow.css'],
  encapsulation: ViewEncapsulation.None
})
export class QillEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
