import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FetchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
