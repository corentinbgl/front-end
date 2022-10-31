
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from 'src/app/landing-page/services/comics.service';


@Component({
  selector: 'app-detailcomics',
  templateUrl: './detailcomics.component.html',
  styleUrls: ['./detailcomics.component.scss']
})
export class DetailcomicsComponent implements OnInit {

  detailComics!: DetailcomicsComponent[];

 
  constructor(private route: ActivatedRoute,
              private comicsService: ComicsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const comicsIdFromRoute = String(routeParams.get('comics_id'));
    
    const comic$ = this.comicsService.getDetailComicsById(comicsIdFromRoute);
  }

  
}
