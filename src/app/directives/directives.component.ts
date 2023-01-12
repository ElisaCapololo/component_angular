import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  isApproved = false;

  approve(status: any){
    this.isApproved = status;
  }

  numbers = [
    'One',
    'Two',
    'Three',
    'Four'
  ];

  highlightColor = 'white';
  isStyleApplied = false;
  
  highlight(color: string){
    this.highlightColor = color;
  }

  toggleStyle(){
    this.isStyleApplied = !this.isStyleApplied;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
