import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {

  tracksTrending:Array<TrackModel> =[];
  tracksRandom:Array<TrackModel> =[];
  listObservers$: Array<Subscription>=[];

  constructor(private trackService:TrackService) { }
  

  ngOnInit(): void {
   
    this.loadDataAll()
    this.loadDataReverse()

  }

  loadDataAll():void{

    this.trackService.getAllTracks$()
    .subscribe((response: TrackModel[]) =>{
      //console.log('-----> ',response);
      this.tracksTrending = response;
    })
  }

  loadDataReverse():void{

    this.trackService.getAllReverse$()
    .subscribe((response: TrackModel[]) =>{
      //console.log('-----> ',response);
      this.tracksRandom = response;
    })
  }

  ngOnDestroy(): void {


  }

}
