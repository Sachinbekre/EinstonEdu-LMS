import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  filmEdit =
  {
    "tips":[
      {
        "heading":"Equipment can be easy.",
        "content":"You don’t need to buy fancy equipment. Most smartphone cameras can capture video in HD, and you can record audio on another phone or external microphone."
      },
      {
        "heading":"Students need to hear you.",
        "content":"A good microphone is the most important piece of equipment you will choose. There are lot of affordable options.. Make sure it’s correctly plugged in and 6-12 inches (15-30 cm) from you."
      },
      {
        "heading":"Make a studio.",
        "content":"Clean up your background and arrange props. Almost any small space can be transformed with a backdrop made of colored paper or an ironed bed sheet."
      },
      {
        "heading":"Light the scene and your face.",
        "content":"Turn off overhead lights. Experiment with three point lighting by placing two lamps in front of you and one behind aimed on the background."
      },
      {
        "heading":"Reduce noise and echo.",
        "content":"Turn off fans or air vents, and record at a time when it’s quiet. Place acoustic foam or blankets on the walls, and bring in rugs or furniture to dampen echo."
      },
      {
        "heading":"Be creative.",
        "content":"Students won’t see behind the scenes. No one will know if you’re surrounded by pillows for soundproofing...unless you tell other instructors in the community!"
      }
    ],
    "requirements":[
      {
        "content":"Film and export in HD to create videos of at least 720p, or 1080p if possible"
      },
      {
        "content":"Audio should come out of both the left and right channels and be synced to your video"
      },
      {
        "content":"Audio should be free of echo and background noise so as not to be distracting to students"
      }
    ],
    "resources":[
      {
        "links":"Teach Hub: Guide to equipment",
        "text":"Make a home studio on a budget"
      },
      {
        "links":"Udemy Trust & Safety",
        "text":"Our policies for instructors and students"
      },
      {
        "links":"Join the community",
        "text":"A place to talk with other instructors"
      },
    ]
  }

}
