import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable, OnInit } from '@angular/core';
import { YachtModel } from './yacht.model';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { communicationService } from './communication.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService implements OnInit{

    constructor(private http: HttpClient, private communicationService: communicationService) {}
    yachts: YachtModel[] = [];

    ngOnInit() {
        this.fetchYachts();
    }

    fetchYachts() {
        this.http.get<YachtModel[]>('https://nova-yachts-default-rtdb.europe-west1.firebasedatabase.app/yachts.json').pipe(tap(yachts => {this.setYachts(yachts);
        console.log(this.yachts)})).subscribe(response => {
            this.yachts = response;
            if (this.yachts == null) {
                this.yachts = [];
            }
            this.communicationService.finishedYachtFetching.emit();
        });
    }

    storeYachts() {
        this.http.put('https://nova-yachts-default-rtdb.europe-west1.firebasedatabase.app/yachts.json', this.yachts).subscribe(response => {
            console.log(response);
        })
    }

    storeYacht(yacht: YachtModel) {
        this.http.post('https://nova-yachts-default-rtdb.europe-west1.firebasedatabase.app/yachts.json', yacht).subscribe(response => {
            console.log(response);
        })
    }
   
    setYachts(yachts: YachtModel[]) {
        this.yachts = yachts;
    }

    getYachts() {
        return this.yachts;
    }

    uploadImage(vals:any): Observable<any> {
        let data = vals;
        console.log(data);
        return this.http.post('https://api.cloudinary.com/v1_1/dsgx9xiva/upload', data)
      }

      addYacht(yacht: YachtModel) {
        this.yachts.push(yacht);
      }

      delete(index: number) {
        this.yachts.splice(index, 1);
        this.storeYachts();
      }

}