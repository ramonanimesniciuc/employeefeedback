import { TemplateType } from "./template-type.model";

export class QuestionTemplate {
  private title:string;
  private answer:any[];
  private type:TemplateType;

  constructor(input){
   this.title = input.title;
   this.answer = input.answers;
   this.type = input.type;
  }
}
