import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';
import { CourselistService } from '../../course/course-list/courselist.service';
// import { ViewEncapsulation } from '@angular/compiler/src/core';
declare var videojs: any;

@Component({
  selector: 'app-aside-bar-one',
  templateUrl: './aside-bar-one.component.html',
  styleUrls: ['./aside-bar-one.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class AsideBarOneComponent implements OnInit {


  private videoJSplayer: any;
  title = 'slideApp';
  private _openedL: boolean = false;
  private _openedR: boolean = false;
  private _openedR2: boolean = false;
  private _modeNumL = 'push';
  private _modeNumR = 'push';
  private _modeNumR2 = 'push';
  private _positionNumL = 'left';
  private _positionNumR = 'right';
  private _positionNumR2 = 'right';
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = false;
  private _closeOnClickBackdrop: boolean = false;
  private _showBackdrop: boolean = false;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = true;
  private _keyClose: boolean = false;
  private _autoCollapseHeight: boolean = false;
  private _autoCollapseWidth: boolean = false;
  private matchID;

  myscreenheight;
  listData;
  ids;
  dataFromChild;
  transcriptUrl;
  public path =[];
  constructor(public ActiveRouter: ActivatedRoute, private router: Router, public asideService: CourselistService) { }
  ngOnInit() {
    // this.myscreenheight = { 'height': innerHeight+400 + 'px' };
    // console.log(this.myscreenheight);
    // console.log(dataFromChild);
    // this.eventFromChild(dataFromChild);
    // this.eventFromChild();
    this.listData = this.asideService.courseData;
    for (let index2 = 0; index2 < this.listData[0].contents.length; index2++) {
      for (let index = 0; index < this.listData[0].contents[index2].content.length; index++) {
        // console.log(this.listData[0].contents[index2].content[index].url);
       this.path.push(this.listData[0].contents[index2].content[index].url);

    }
  //  console.log(this.path);
      
    }


    this.ActiveRouter
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.ids = "";
        this.ids = params;
        // console.log(params);
      });
    this.loadFirstVideourl();
  }
  @ViewChild('video')
  public video: ElementRef;
  loadFirstVideourl() {
    for (let index = 0; index < this.listData.length; index++) {
      if (this.listData[index]['course_id'] === this.ids['c']) {
        for (let index1 = 0; index1 < this.listData[index]['contents'].length; index1++) {
          if (this.listData[index]['contents'][index1]['section'] === this.ids['s']) {
            for (let index2 = 0; index2 < this.listData[index]['contents'][index1]['content'].length; index2++) {
              
              if (this.listData[index]['contents'][index1]['content'][index2]['id'] === this.ids['ID']) {
                // console.log('video play' + this.listData[index]['contents'][index1]['content'][index2]['url']);
                this.dataFromChild = '';
                this.dataFromChild = this.listData[index]['contents'][index1]['content'][index2]['url'];
                this.transcriptUrl = this.listData[index]['contents'][index1]['content'][index2]['transcriptFile'];
                // console.log(this.transcriptUrl,this.dataFromChild);
                this.video.nativeElement.src = this.dataFromChild;
                this.video.nativeElement.load();
                this.video.nativeElement.play();

              }
            }
          }
        }
      }
    }
  }
  ngAfterViewInit(): void {
    this.initVideoJs();

  }



  // dataFromChild = 'assets/vido/tips_video.mp4';

  // eventFromChild(data) {
  //   // let getData = data;
  //   let dataFromChild = data;
  //   console.log(dataFromChild);
  //   this.video.nativeElement.src = dataFromChild;
  //   this.video.nativeElement.load();
  //   // this.video.nativeElement.play();
  // }

  public isSelected: boolean = true;




  initVideoJs() {
    this.videoJSplayer = videojs('video_player');

 
    // let m = this.videoJSplayer.currentTime();
    // console.log(m);
    // if(m==10){
    //   alert("im in 10")
    // }
    // creating rewind button
var vjsButtonComponent = videojs.getComponent('Button');
videojs.registerComponent('rewind', videojs.extend(vjsButtonComponent, {
  constructor: function () {
    vjsButtonComponent.apply(this, arguments);
  },
  handleClick: function () {
    let player = videojs('video_player');
    let x = player.currentTime();
    let y =x-5;
    player.currentTime(y);
  },
  buildCSSClass: function () {
    return 'vjs-control vjs-download-button';
  },
  createControlTextEl: function (button) {
    return $(button).html(('<button class="vjs-backward-control vjs-control vjs-button" type="button" title="rewind"><span  class="fa fa-rotate-left"></span></button>'));
  }
}));

videojs(
  'video_player',
  { fluid: true },
  function () {
    this.getChild('controlBar').addChild('rewind', {});
  }
);
// ends rewind button

 // creating forward button
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
   },
   buildCSSClass: function () {
     return 'vjs-control vjs-download-button';
   },
   createControlTextEl: function (button) {
     return $(button).html(('<button class="vjs-control vjs-button" type="button" title="forward"><span  class="fa fa-rotate-right"></span></button>'));
   }
 }));
 
 videojs(
   'video_player',
   { fluid: true },
   function () {
     this.getChild('controlBar').addChild('forward', {});
   }
 );
 // ends forward button

  // creating continue button
// var vjsButtonComponent = videojs.getComponent('Button');
// videojs.registerComponent('continue', videojs.extend(vjsButtonComponent, {
//   constructor: function () {
//     vjsButtonComponent.apply(this, arguments);
//   },
//   handleClick: function () {
//     var player = videojs('video_player');
//     var options = {};

//     var player = videojs('video_player', options, function onPlayerReady() {
//       videojs.log('Your player is ready!');
    
//       // In this context, `this` is the player that was created by Video.js.
//       this.play();
    
//       // How about an event listener?
//       this.on('ended', function() {
//         videojs.log('Awww...over so soon?!');
//       });
//     });
//     console.log(player);
//   },
//   buildCSSClass: function () {
//     return 'vjs-control vjs-download-button';
//   },
//   createControlTextEl: function (button) {
//     // return $(button).html(('Continue<span class = "fa fa-step-forward" title="Continue" style = "cursor: pointer"></span>'));
//     return $(button).html(('<button class="vjs-control vjs-button" type="button" title="Continue"><span class = "fa fa-step-forward" ></span></button>'));
//   }
// }));

//     videojs(
//       'video_player',
//       { fluid: true },
//       function () {
//         this.getChild('controlBar').addChild('continue', {});
//       }
//     );
// ends rewind button

 

    // let myButton =videojs.controlBar.addChild('button',{
    //   text:"press me",
    // });
    // myButton.addClass("html-classname");
    // const transcript = this.videoJSplayer.transcript();
    // const transcriptCon = document.querySelector('#transcriptContainer');
    // transcriptCon.appendChild(transcript.el());
    // console.log(this.videoJSplayer);
    // videojs.controlBar.addChild('button',{
    //   text:"Back",
    //   tabIndex:"3",

    // }).addClass("button-Back");
    // $(.button-Back).html("<a href='#' target = '_blank'><i class='fa fa-undo'></i></a>");
  }

  ngOnDestroy() {
    this.videoJSplayer.dispose();
  }
  // private _MODES: Array<string> = ['push'];
  // private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  private _toggleOpenedL(): void {
    this._openedL = !this._openedL;
    this.isSelected = !this.isSelected;
    if (this._openedL == true) {
      this._openedR = false;
      this._openedR2 = false;

    }
    // this._openedR = this._openedL?!this._openedL:!this._openedR
  }
  private _toggleOpenedR2(): void {

    this._openedR2 = !this._openedR2;
    if (this._openedR2 == true) {
      this._openedR = false;
      this._openedL = false;
      this.isSelected = true;
    }
  }
  private _toggleOpenedR(): void {
    this._openedR = !this._openedR;


    if (this._openedR == true) {
      this._openedL = false;
      this._openedR2 = false;
      this.isSelected = true;
    }

    // this._openedL = this._o{penedR?!this._openedR:!this._openedL;
  }


  // private _toggleMode(): void {
  //   this._modeNum++;

  //   if (this._modeNum === this._MODES.length) {
  //     this._modeNum = 0;
  //   }
  // }

  private _toggleAutoCollapseHeight(): void {
    // this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  private _toggleAutoCollapseWidth(): void {
    // this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  // private _togglePosition(): void {
  //   this._positionNum++;

  //   if (this._positionNum === this._POSITIONS.length) {
  //     this._positionNum = 0;
  //   }
  // }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  private _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  private _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  private _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  private _onOpenStart(): void {
    // console.info('Sidebar opening');
  }

  private _onOpened(): void {
    // console.info('Sidebar opened');
  }

  private _onCloseStart(): void {
    // console.info('Sidebar closing');
  }

  private _onClosed(): void {
    // console.info('Sidebar closed');
  }

  private _onTransitionEnd(): void {
    // console.info('Transition ended');
  }

  private _onBackdropClicked(): void {
    // console.info('Backdrop clicked');
  }
  someFunction() {

  }
}
