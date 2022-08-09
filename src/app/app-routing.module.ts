import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { AddFormComponent } from './add-form/add-form.component';
import { FairlineComponent } from './fairline/fairline.component';
import { FlyComponent } from './fairline/fly/fly.component';
import { OpenComponent } from './fairline/open/open.component';
import { HomeComponent } from './home/home.component';
import { ExplorerComponent } from './numarine/explorer/explorer.component';
import { NumarineComponent } from './numarine/numarine.component';
import { SportComponent } from './numarine/sport/sport.component';
import { PreOwnedComponent } from './pre-owned/pre-owned.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  // Numarine
  {path: 'numarine', component: NumarineComponent},
  {path: 'numarine/sport', component: SportComponent},
  {path: 'numarine/explorer', component: ExplorerComponent},

  // Fairline
  {path: 'fairline', component: FairlineComponent},
  {path: 'fairline/open', component: OpenComponent},
  {path: 'fairline/fly', component: FlyComponent},

  // Pre-owned
  {path: 'pre-owned', component: PreOwnedComponent},

  // Adding and removing
  {path: 'add', component: AddFormComponent},
  {path: 'remove', component: RemoveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
