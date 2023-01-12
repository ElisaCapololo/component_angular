import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  channelNameParent = "";
  msgFromChild = "";

  receiveMessage(msg: any){
    this.msgFromChild = msg;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
