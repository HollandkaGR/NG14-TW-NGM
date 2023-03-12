import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class MainService implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Main service init')
  }

  public log(message: String): void {
    console.log('Log: ', message)
  }

}
