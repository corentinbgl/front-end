import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detailcomics',
  templateUrl: './detailcomics.component.html',
  styleUrls: ['./detailcomics.component.scss']
})
export class DetailcomicsComponent implements OnInit {

 
  buttonText!: string;
  route: any;

  constructor() { }

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    // this.detailComics$ = this.detailComics.Service.getFaceSnapById(faceSnapId);
  }

}
