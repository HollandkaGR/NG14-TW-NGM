import { Injectable, OnInit } from '@angular/core';

@Injectable()
export abstract class MainService implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Main service init')
  }

  public abstract log(message: String): void

}
