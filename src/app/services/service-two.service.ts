import { Injectable, OnDestroy } from '@angular/core';
import { MainService } from './main.service';

@Injectable()
export class ServiceTwoService extends MainService implements OnDestroy {

  constructor() {
    console.log('ServiceTwo initialized')
    super()
  }

  ngOnDestroy(): void {
    console.log('ServiceTwo destroyed')
  }

  public override log(message: String): void {
    console.log('Service Two logging: ', message)
  }

}
