import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { YachtModel } from '../shared/yacht.model';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }
  yachts: YachtModel[] = [];

  ngOnInit(): void {
    this.dataStorageService.fetchYachts();
      setTimeout(() => {
        this.yachts = this.dataStorageService.getYachts();
      }, 1000)
  }

  onDelete(index: number) {
    this.dataStorageService.delete(index);
  }

}
