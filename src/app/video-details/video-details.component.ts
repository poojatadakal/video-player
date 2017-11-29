import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailsComponent implements OnInit {
	video: any;
	private editTitle: boolean = false;
	private updateVideoEvent = new EventEmitter();
	private deleteVideoEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
  	this.editTitle= false;
  }
  onTitleClick(){
  	this.editTitle= true;
  }

  updateVideo(){
  	this.updateVideoEvent.emit(this.video);
  }
  deleteVideo(){
  	this.deleteVideoEvent.emit(this.video);
  }

}
