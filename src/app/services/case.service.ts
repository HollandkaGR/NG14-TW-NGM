import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  private childService!: MainService

  constructor() {}

  set service(cService: MainService) {
    this.childService = cService
  }

  log(message: string): void {
    if (!this.childService) return
    this.childService.log(message)
  }

}
