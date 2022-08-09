import { Component, OnInit } from '@angular/core';
import { communicationService } from '../shared/communication.service';
import { DataStorageService } from '../shared/data-storage.service';
import { YachtModel } from '../shared/yacht.model';
import { faClock, faMoneyBill1, faCalendarCheck } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-pre-owned',
  templateUrl: './pre-owned.component.html',
  styleUrls: ['./pre-owned.component.css']
})
export class PreOwnedComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private communicatinService: communicationService) { }
  
  isLoading = true;
  faClock = faClock;
  faMoneyBill1 = faMoneyBill1;
  faCalendarCheck = faCalendarCheck;

  yachts: YachtModel[] = [];

  ngOnInit(): void {
      this.dataStorageService.fetchYachts();
      this.communicatinService.finishedYachtFetching.subscribe(() => {
        this.yachts = this.dataStorageService.getYachts();
        this.isLoading = false;
      })
  }
}
