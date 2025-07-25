import { Component, ElementRef, input, OnInit, viewChild } from '@angular/core';
import {  filter, fromEvent, map, tap } from "rxjs";

@Component({
  selector: 'app-key-logger-component',
  imports: [],
  templateUrl: './key-logger-component.html',
  styleUrl: './key-logger-component.css'
})
export class KeyLoggerComponent implements OnInit {
  input = viewChild<ElementRef>('keyContainer');
  numeric = input(false);
  keys = '';

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input()!.nativeElement, 'keyup');
    
    logger$.pipe(
      map(evt => evt.key.charCodeAt(0)),
      filter(code => {
        if (this.numeric()) {
          return (code > 31 && (code < 48 || code > 57)) === false;
        }
        return true;
      }),
      tap(digit => this.keys += String.fromCharCode(digit))
    ).subscribe();
  }  
}
