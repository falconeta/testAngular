import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent implements OnInit {
  constructor(private servizioGeolocalizzazione: GeolocationService) { }

  ngOnInit() {
    this.servizioGeolocalizzazione.getLocation();
  }
}
