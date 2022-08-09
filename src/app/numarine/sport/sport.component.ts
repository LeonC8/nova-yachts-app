import { Component, OnInit } from '@angular/core';
import { faRuler, faGasPump, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor() { }

  faRuler = faRuler
  faGasPump = faGasPump
  faTachometerAlt = faTachometerAlt

  ngOnInit(): void {
  }



}
