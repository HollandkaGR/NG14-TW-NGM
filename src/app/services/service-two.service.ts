import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable()
export class ServiceTwoService extends MainService {

  constructor() {
    super()
  }

  public log(message: String): void {
    console.log('Service Two logging: ', message)
  }

}
