import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('title')title: string;
  @Input('footer')footer:number;
  @Input('description')description:string;
  @Input('subTitle')subTitle:string;
  @Input('type')type:number;
  @Output('subscriptionSelected')subscriptionSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendSubscriptionSent(){
  this.subscriptionSelected.emit(this.type.toString());
  }

}
