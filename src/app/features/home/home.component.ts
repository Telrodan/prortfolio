import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
