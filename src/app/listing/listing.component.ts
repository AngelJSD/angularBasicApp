import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
//import { cribs } from './../data/cribs';
import { map } from 'rxjs/operators'

import { CribsService} from './../services/cribs.service'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  mCribs: Array<any>;
  error: string;
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ]

  // Injecting dependency Http:
  constructor(private http: Http, private cribsService: CribsService) { }

  ngOnInit() {

    this.cribsService.getAllCribs()
      .subscribe(
        data => this.mCribs = data,
        error => this.error = error.statusText
      )
    
    this.cribsService.newCribSubject.subscribe(
      
      // Put new crib at the beginning
      data => this.mCribs = [data, ...this.mCribs]
    )
      
  }

}
