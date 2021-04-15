import { Component, OnInit } from '@angular/core';
import { CurrentScreenStates } from '../models/current-screen-states.enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public currentScreen:CurrentScreenStates = CurrentScreenStates.HOME;
  constructor() { }

  ngOnInit(): void {
  }

}
