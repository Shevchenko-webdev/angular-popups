import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-popup-layout',
  templateUrl: './popup-layout.component.html',
  styleUrls: ['./popup-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupLayoutComponent {
  @Input() title: string;

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>()

  close() {
    this.onClose.emit();
  }
}
