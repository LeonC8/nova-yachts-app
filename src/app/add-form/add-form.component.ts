import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
import { throwIfEmpty } from 'rxjs';
import { communicationService } from '../shared/communication.service';
import { DataStorageService } from '../shared/data-storage.service';
import { YachtModel } from '../shared/yacht.model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private communicationService: communicationService, private router: Router) { }
  private fileToUpload: any;
  private imageUrl: string = '';
  isLoading = false;
  imageUploaded = false;
  yachtForm: any;

  onSubmit(form: NgForm) {

    console.log('Form: ');
    console.log(form.value);
    this.isLoading = true;
    this.yachtForm = form;

    const yacht: YachtModel = {
      name: this.yachtForm.value.name,
      price: this.yachtForm.value.price,
      year: this.yachtForm.value.year,
      isImmediateDelivery: this.yachtForm.value.isImmediateDelivery,
      mainLink: this.imageUrl,
      type: this.yachtForm.value.type
    }
    
    this.onImageAdded();
    this.communicationService.finishedImageUploading.subscribe(() => {
      yacht.mainLink = this.imageUrl;
      console.log('Yacht loaded: ')
      console.log(yacht);
      this.dataStorageService.fetchYachts();
      this.communicationService.finishedYachtFetching.subscribe(() => {
        console.log("fetched yachts, now adding")
        this.dataStorageService.addYacht(yacht);
        console.log('added yacht to array, now storing')
        this.dataStorageService.storeYachts();
        console.log('stored yachts')
        setTimeout(() => {
          location.reload()
        }, 1000)
      })
    })
  }

  onImageAdded() {

    const formData = new FormData();
    formData.append('file', this.fileToUpload);
    formData.append('upload_preset', 'vofzaqof');
    this.dataStorageService.uploadImage(formData).subscribe((imageData) => {
      this.imageUrl = imageData.url;
      console.log(imageData.url);
      this.communicationService.finishedImageUploading.emit();
    });

    
  }
  ngOnInit(): void {
  }

  onAdd() {
    this.dataStorageService.storeYachts();
  }

  onFetch() {
    this.dataStorageService.fetchYachts();
  }

  onYachtAdded(form: NgForm) {
  }

  handleFileInput(event: any) {
    this.fileToUpload = event.target.files[0];
}

}
