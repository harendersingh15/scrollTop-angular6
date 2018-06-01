import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="onPreviousSearchPosition()">Previous</button>
    <div #panel style="overflow-y:scroll; height: 300px; width:100px" >
      <div (click)="questionSelection(log)" *ngFor="let log of arr; let i = index" innerHTML="{{log}}" [id]="i"></div>
    </div>
    <button (click)="onNextSearchPosition()">Next</button>
  `
})
export class AppComponent {

  public arr = Array(1000).fill(0).map((item, index) => ++index);
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;

  public onPreviousSearchPosition(): void {
    this.panel.nativeElement.scrollTop -= 100;
  }

  public onNextSearchPosition(): void {
    this.panel.nativeElement.scrollTop += 100;
  }

  questionSelection(question) {
    console.log(question);
  }
}

