import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Popup} from "../popup";

@Component({
  selector: '[confirm-popup]',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent extends Popup {
  @Input() title: string;
  @Input() description: string;

  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();

  confirm() {
    this.onConfirm.emit();
  }
}
