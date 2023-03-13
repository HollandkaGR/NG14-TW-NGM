import { Injectable } from '@angular/core';
import { CaseService } from './case.service';
import { MainService } from './main.service';

@Injectable()
export class ServiceOneService extends MainService {

  constructor(private caseService: CaseService) {
    console.log('ServiceOne initialized')
    super()
    this.caseService.service = this
  }

  ngOnDestroy(): void {
    console.log('ServiceOne destroyed')
  }

  public override log(message: String): void {
    console.log('Service One logging: ', message)
  }

}
