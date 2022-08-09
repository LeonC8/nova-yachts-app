import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NumarineComponent } from './numarine/numarine.component';
import { FairlineComponent } from './fairline/fairline.component';
import { PreOwnedComponent } from './pre-owned/pre-owned.component';
import { AddFormComponent } from './add-form/add-form.component';
import { DataStorageService } from './shared/data-storage.service';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RemoveComponent } from './remove/remove.component';
import { OpenComponent } from './fairline/open/open.component';
import { FlyComponent } from './fairline/fly/fly.component';
import { ExplorerComponent } from './numarine/explorer/explorer.component';
import { SportComponent } from './numarine/sport/sport.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { communicationService } from './shared/communication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NumarineComponent,
    FairlineComponent,
    PreOwnedComponent,
    AddFormComponent,
    RemoveComponent,
    OpenComponent,
    FlyComponent,
    ExplorerComponent,
    SportComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataStorageService, communicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
