import { Component, OnInit } from '@angular/core';
declare let $: any;
declare let layerSlider: any;
@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss']
})
export class WorkbenchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
     
      // Calling LayerSlider on the target element with custom slider options
      $('#layersliders').layerSlider({
        sliderVersion: '6.0.0',
				responsiveUnder: 0,
				layersContainer: 0,
				slideBGSize: 'auto',
				skin: 'v5',
				// thumbnailNavigation: 'always',
        skinsPath: '../../../assets/layerslider/skins/', 
  

          // Please make sure to separate object
          // properties (i.e. your options) with a comma.
      });
  });
  }

}
