import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  firstName = "Elisa";
  defaulValue="Capololo";

  passValueToComponent(e: any){
    console.log(e.target.value);
  }

  changeValue(e: any){
    console.log(e.target.value);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
