import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieServiceService]
})
export class MovieComponent implements OnInit {
  movies!: any[];

  images!: any []

  constructor(private services: MovieServiceService) {
    this.images = new Array<any>()

  }
  getImagesFromAPI() {
    this.services.getImages().subscribe(images => {
      console.log(images)
      this.images = images
    })
  }

  ngOnInit(): void {
  }


}