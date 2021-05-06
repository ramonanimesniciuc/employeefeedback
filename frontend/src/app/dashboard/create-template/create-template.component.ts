import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { QuestionTemplate } from '../models/question-template.model';
import { TemplateType } from '../models/template-type.model';
import { CreateTemplateService } from './create-template.service';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {
  public TemplateType = TemplateType;
  public questions:QuestionTemplate[] = [];
  public isEditingActive:boolean = false;
  public currentEditingTemplate: TemplateType;
  public templateTitle: string;
  public editedQuestion: any;
  public isEditOn: boolean;
  public editedIndex: number;
  constructor(private createTemplateService: CreateTemplateService,
    private notificationsService: NotificationsService) { }

  ngOnInit(): void {
  }

  public addTemplate(template:TemplateType){
   this.currentEditingTemplate = template;
   console.log(this.questions)
  }

  public onQuestionAdded(data){
    this.editedQuestion =null;
    if(this.isEditOn){
      this.questions[this.editedIndex] = data;
    }else{
      this.questions.push(data);
    }

    this.currentEditingTemplate = null;
  }

  public submitTemplate(){
  this.createTemplateService.submitTemplate({title:this.templateTitle,questions:this.questions,managerId:localStorage.getItem('id')}).subscribe((result)=>{
    console.log('create template result',result);
    this.questions = [];
    this.currentEditingTemplate = null;
    this.notificationsService.success('Template added into the database!',null,{timeOut:3000})
  })
  }

  public removeQuestion(index){
    this.questions.splice(index,1);
  }

  public editQuestion(question,index){
   this.isEditOn = true;
   this.currentEditingTemplate = question.type;
   this.editedQuestion = question;
  }

  public onStopEditing(event)
  {
    this.isEditOn = false;
    this.editedQuestion = null;
    this.currentEditingTemplate = null;
  }

}
