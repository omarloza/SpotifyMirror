import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {}


  getAllTracks$(): Observable<any> {

    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any) => {
        return data;
      })
    );

  }

  getAllReverse$(): Observable<any> {

    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}:any) => {
        //console.log(data);
        return data.reverse();
      })
    );

  }

  


}
