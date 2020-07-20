import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoplayerRoutingModule } from './videoplayer-routing.module';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    VideoplayerRoutingModule
  ],
  exports:[VideoPlayerComponent]
})
export class VideoplayerModule { }
