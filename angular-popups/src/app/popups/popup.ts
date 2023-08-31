import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  template: ''
})

export class Popup {
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  close() {
    this.onClose.emit();
  }
}
