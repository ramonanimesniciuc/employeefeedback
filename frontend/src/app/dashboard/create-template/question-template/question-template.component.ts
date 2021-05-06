import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { QuestionTemplate } from '../../models/question-template.model';
import { TemplateType } from '../../models/template-type.model';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.scss'],
})
export class QuestionTemplateComponent implements OnInit, OnChanges {
  @Input('templateType') templateType: TemplateType;
  @Input('editedQuestion')editedQuestion:any;
  @Output('onQuestionAdded')onQuestionAdded = new EventEmitter<any>();
  @Output('onStopEditing')onStopEditing = new EventEmitter<any>();
  public answers: any[] = [];
  public TemplateType = TemplateType;
  public title: string;
  constructor() {}

  ngOnInit(): void {}

  sendQuestion() {
    console.log('question',{title:this.title,answers:this.answers})
    const data= new QuestionTemplate({title:this.title,answers:this.answers,type:this.templateType});
    this.onQuestionAdded.emit(data);
    this.title = '';
    this.answers = [];
  }

  ngOnChanges(changes){
    if(changes.editedQuestion.currentValue && changes.editedQuestion.currentValue!==changes.editedQuestion.previousValue){
      this.title = changes.editedQuestion.currentValue.title;
      this.answers = changes.editedQuestion.currentValue.answer;
    }
  }

  addAnswer() {
    this.answers.push({ text: '' });
  }

  deleteAnswer(i){
    this.answers.splice(i,1);
  }

  stopEditing(){
    this.editedQuestion = null;
    this.onStopEditing.emit();
  }
}
