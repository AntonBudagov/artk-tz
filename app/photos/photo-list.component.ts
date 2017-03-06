import {Component, OnInit} from '@angular/core';
import {PhotoService} from './photo.service';
import {Photo} from './photo';

@Component({
  moduleId: module.id,
  selector: 'photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']

})

export class PhotoListComponent implements OnInit{
  errorMessage: string;
  photos: Photo[];
  title = 'Photo';
  constructor(private photoService: PhotoService){
    this.getPhotos();
    //this.photos = [];
  }

  ngOnInit(){
    this.getPhotos();
  }

  getPhotos(){
    this.photoService.getData()
      .subscribe(
        photos => this.photos = photos,
        error => this.errorMessage = <any>error);

  }
}
