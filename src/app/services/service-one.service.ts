import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable()
export class ServiceOneService extends MainService {

  constructor() {
    super()
  }

  public override log(message: String): void {
    console.log('Service One logging: ', message)
  }

}
