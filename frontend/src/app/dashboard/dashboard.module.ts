import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { QuestionTemplateComponent } from './create-template/question-template/question-template.component';
import { AssignReviewComponent } from './assign-review/assign-review.component';



@NgModule({
  declarations: [DashboardComponent, HomeComponent,AddManagerComponent, AddEmployeesComponent, CreateTemplateComponent, QuestionTemplateComponent, AssignReviewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[DashboardComponent, HomeComponent,AddManagerComponent]
})
export class DashboardModule { }
