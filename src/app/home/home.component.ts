import { Component, OnInit } from '@angular/core';
import { faCalendar, faFileAlt, faCompass, faHandshake } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // FONTAWESOME ICOS INITIALIZATION
  faCalendar = faCalendar;
  faFileAlt = faFileAlt;
  faCompass = faCompass;
  faHandshake = faHandshake;

  ngOnInit(): void {
  }

}
