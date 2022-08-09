import { EventEmitter } from "@angular/core";

export class communicationService {
    finishedImageUploading = new EventEmitter();
    finishedYachtFetching = new EventEmitter();
}