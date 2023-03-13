import { Injectable, OnInit } from '@angular/core';

@Injectable()
export abstract class MainService {

  constructor() { 
    console.log('Main service init')
  }

  public log(message: String): void {
    console.log('Log: ', message)
  }

}
