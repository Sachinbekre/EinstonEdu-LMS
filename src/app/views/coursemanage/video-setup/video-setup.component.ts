import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-video-setup',
  templateUrl: './video-setup.component.html',
  styleUrls: ['./video-setup.component.scss']
})
export class VideoSetupComponent implements OnInit {

  filname="No file choosen";
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  isEditable = false;

  microphone = ["Built-in microphone", "Blue Snowball", "Blue Yeti", "RODE Procaster", "Sony Lavalier", "Audio-Technica 3350iS", "I don't know", "Other"]
  camera = ["Built-in camera", "Webcam- Logitech C920", "Webcam- other", "iPhone", "Android", "I don't know", "Other"];
  software = ["Camtasia PC", "Camtasia Mac", "Windows Movie Maker", "iMovie", "Adobe Premiere", "ScreenFlow", "I don't know", "Other"]
  operating = ["Mac OS", "Windows", "Linux", "Other"]

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    this.fifthFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });


  }
  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }
  private isSelected: string;

  //in the component define a function
  setColor(value) {
    this.isSelected = value;
  }

  detectFiles(event) {
    // this.urls = [];
    // console.log(typeof (this.urls));
    const files = event.target.files;
    this.filname = files[0].name;
    // if (files) {
    //   for (const file of files) {
    //     const reader = new FileReader();
    //     reader.onload = (e: any) => {
    //       this.urls[index]['teamImage'] = e.target.result;
    //       this.img = e.target.result;
    //     };
    //     // console.log(this.urls);
    //     reader.readAsDataURL(file);
    //   }
    // }
  }
}
