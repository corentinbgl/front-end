import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comic } from '../models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) { }

  getNewComics(): Observable<Comic[]> {
    return this.http.get<Comic[]>(`${environment.apiUrl}/comics?nouveaute=true`);
  }

  getSelectionComics(): Observable<Comic[]>{
    return this.http.get<Comic[]>(`${environment.apiUrl}/comics?selection=true`);
  }
  getUniversComics(): Observable<Comic[]>{
    return this.http.get<Comic[]>(`${environment.apiUrl}/comics?univers=DC Comics`);
  }
}
