import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  public message!: string 

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    console.log(typeof this.mainService);
    
  }

  onSubmitClick() {
    this.mainService.log(this.message)
  }

}
