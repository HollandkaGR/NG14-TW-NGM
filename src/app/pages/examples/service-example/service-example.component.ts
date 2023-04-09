import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
