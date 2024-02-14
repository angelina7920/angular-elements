import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  template: `
    <div class="cont-wrapper">
      <button (click)="changeCount(true)" type="button">+</button>
      <div>{{ count }}</div>
      <button (click)="changeCount(false)" type="button">-</button>
    </div>
  `,
  styles: `
    .cont-wrapper{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
  `,
})
export class CountComponent {
  @Input() max = 5;
  @Input() min = -5;
  @Input() count = 0;

  @Output() changeCountEvent = new EventEmitter<number>();

  public changeCount(event: boolean): void {
    if (event && this.count < this.max) {
      this.count++;
    }
    if (!event && this.count > this.min) {
      this.count--;
    }
    this.changeCountEvent.emit(this.count);
  }
}
