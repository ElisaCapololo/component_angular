import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  channelName = 'ProgrammingAngular'

  @Output()
  sendMessageEmitter = new EventEmitter();

  sendMessageToParent(e: any){
    this.sendMessageEmitter.emit(e.target.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
