import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropRoutingModule } from './crop-routing.module';
import { ImageCropComponent } from './image-crop/image-crop.component';

/** Import animations */
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Import Alyle UI */
import {
  LyThemeModule,
  LY_THEME
} from '@alyle/ui';

/** Import the component modules */
import { LyButtonModule } from '@alyle/ui/button';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
import { FormsModule } from '@angular/forms';
import { LyIconModule } from '@alyle/ui/icon';

/** Import themes */
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { QillEditorComponent } from './qill-editor/qill-editor.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [ImageCropComponent, QillEditorComponent],
  imports: [
    CommonModule,
    QuillModule,
    CropRoutingModule,
    // Animations
    // BrowserAnimationsModule,
    // Set theme
    LyThemeModule.setTheme('minima-light'),
    // Add components
    LyButtonModule,
    LyToolbarModule,
    LyResizingCroppingImageModule,
    
    FormsModule,
   
   
    LyIconModule
  ],
  exports: [
    
    ImageCropComponent] ,
  /** Add themes */
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true } // name: `minima-dark`
  ]
})
export class CropModule { }
