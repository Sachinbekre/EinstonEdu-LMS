import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { CourselistService } from '../../course/course-list/courselist.service';
declare var videojs: any;
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  // ngclass = 'mat-video-responsive';
  // v=["assets/NASA Rocket Launch.mp4"];

  // constructor(private renderer: Renderer2) { }


  public videoJSplayer: any;

  constructor( public asideService: CourselistService) {
  }
  listData;
  public path;
  ngOnInit() {
    this.listData = this.asideService.courseData;
    for (let index2 = 0; index2 < this.listData[0].contents.length; index2++) {
      for (let index = 0; index < this.listData[0].contents[index2].content.length; index++) {
        console.log(this.listData[0].contents[index2].content[index].url);
       this.path = this.listData[0].contents[index2].content[index].url;

    }
   console.log(this.path);
      
    }
  }

  ngAfterViewInit(): void {
    this.initVideoJs();
  }



  
  initVideoJs() {
    this.videoJSplayer = videojs('video_player');

      
    var vjsButtonComponent = videojs.getComponent('Button');
    videojs.registerComponent('forward', videojs.extend(vjsButtonComponent, {
      constructor: function () {
        vjsButtonComponent.apply(this, arguments);
      },
      handleClick: function () {
        let player = videojs('video_player');
       let x = player.currentTime();
       let y =x+5;
       player.currentTime(y);
        // document.location = '/path/to/your/video.mp4'; //< there are many variants here so it is up to you how to get video url
      },
      buildCSSClass: function () {
        return 'vjs-control vjs-download-button';
      },
      createControlTextEl: function (button) {
        return $(button).html(('<span class="fa fa-forward"></span>'));
      }
    }));

    videojs(
      'video_player',
      { fluid: true },
      function () {
        this.getChild('controlBar').addChild('forward', {});
      }
    );

    var vjsButtonComponent = videojs.getComponent('Button');
videojs.registerComponent('DownloadButton', videojs.extend(vjsButtonComponent, {
    constructor: function () {
        vjsButtonComponent.apply(this, arguments);
    },
    handleClick: function () {
      alert("Download");
        // document.location = '/path/to/your/video.mp4'; //< there are many variants here so it is up to you how to get video url
    },
    buildCSSClass: function () {
        return 'vjs-control vjs-download-button';
    },
    createControlTextEl: function (button) {
        return $(button).html(('<span class="fa fa-download"></span>'));
    }
}));

videojs(
    'video_player',
    {fluid: true},
    function () {
        this.getChild('controlBar').addChild('DownloadButton', {});
    }
);
    // const transcript = this.videoJSplayer.transcript();
    // const transcriptCon = document.querySelector('#transcriptContainer');
    // transcriptCon.appendChild(transcript.el());
    var Button = videojs.getComponent('Button');
    var MyButton = videojs.extend(Button, {
      constructor: function () {
        Button.apply(this, arguments);
        this.addClass('fa-backward');
        // this.addClass('fa-forward');
      },
      
      handleClick: function () {
        let player = videojs('video_player');
       let x = player.currentTime();
       let y =x-5;
       player.currentTime(y);
        // player.on('timeupdate', function() {
          
        // let x =  this.currentTime();
        // player.currentTime=x;
        // x=-5/1000;
          // console.log(x);
        // });
      }
    });
    console.log(Button);
    videojs.registerComponent('MyButton', MyButton);
    this.videoJSplayer.getChild('controlBar').addChild('myButton', {});
   
   
  }

  ngOnDestroy() {
    this.videoJSplayer.dispose();
  }
  
 
  

}
