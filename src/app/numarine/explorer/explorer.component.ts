import { Component, OnInit } from '@angular/core';
import { faRuler, faCalendarCheck , faMoneyBill1Wave} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {

  constructor() { }

  faRuler = faRuler;
  faCalendarCheck = faCalendarCheck;
  faMoneyBill1Wave = faMoneyBill1Wave;

  ngOnInit(): void {
  }

}
