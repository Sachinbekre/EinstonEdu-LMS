import { ImageCropComponent } from './image-crop/image-crop.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QillEditorComponent } from './qill-editor/qill-editor.component';

const routes: Routes = [
  
    {
      path:"",
      component:ImageCropComponent
    },
   
   
      {
        path:"quill",
        component:QillEditorComponent
      }

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropRoutingModule { }
