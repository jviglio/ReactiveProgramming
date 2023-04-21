import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { interval, take, lastValueFrom } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class App {
  name = 'Reactive Programming';
  public finalNumber: number;
  public number: number;

  constructor() {
    this.execute();
  }

  async execute() {
    const source$ = interval(1000).pipe(take(6));  //observable
    source$.subscribe((value) => (this.number = 5 - value)); //subscripcion
    this.finalNumber = await lastValueFrom(source$);
  }
}

bootstrapApplication(App);
