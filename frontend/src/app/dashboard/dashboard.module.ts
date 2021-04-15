import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddManagerComponent } from './add-manager/add-manager.component';



@NgModule({
  declarations: [DashboardComponent, HomeComponent,AddManagerComponent],
  imports: [
    CommonModule
  ],
  exports:[DashboardComponent, HomeComponent,AddManagerComponent]
})
export class DashboardModule { }
