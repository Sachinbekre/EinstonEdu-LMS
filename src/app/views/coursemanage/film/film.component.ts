import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.filmEdit);
  }
filmEdit =
  {
    "tips":[
      {
        "heading":"Take breaks and review frequently.",
        "content":"Check often for any changes such as new noises. Be aware of your own energy levels--filming can tire you out and that translates to the screen."
      },
      {
        "heading":"Build rapport.",
        "content":"Students want to know who’s teaching them. Even for a course that is mostly screencasts, film yourself for your introduction. Or go the extra mile and film yourself introducing each section!"
      },
      {
        "heading":"Set yourself up for editing success",
        "content":"You can edit out long pauses, mistakes, and ums or ahs. Film a few extra activities or images that you can add in later to cover those cuts."
      },
      {
        "heading":"Being on camera takes practice.",
        "content":"Make eye contact with the camera and speak clearly. Do as many retakes as you need to get it right."
      },
      {
        "heading":"Create audio marks.",
        "content":"Clap when you start each take to easily locate the audio spike during editing. Use our guides to manage your recording day efficiently."
      },
      {
        "heading":"For screencasts, clean up.",
        "content":"Move unrelated files and folders off your desktop and open any tabs in advance. Make on-screen text at least 24pt and use zooming to highlight."
      }
    ],
    "requirements":[
      {
        "content":"Audio should come out of both the left and right channels and be synced to your video"
      },
      {
        "content":"Audio should be free of echo and background noise so as not to be distracting to students"
      },
      {
        "content":"Film and export in HD to create videos of at least 720p, or 1080p if possible"
      }
    ],
    "resources":[
      {
        "links":"Create a test video",
        "text":"Get feedback before filming your whole course"
      },
      {
        "links":"Teach Hub: Guide to quality A/V",
        "text":"Film and edit with confidence"
      },
      {
        "links":"EinstonEdu trust & safety",
        "text":"Our policies for instructors and students"
      }
    ]
  }

}
