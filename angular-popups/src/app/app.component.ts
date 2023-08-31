import {Component, ViewEncapsulation} from '@angular/core';
import {PopupsService} from "./popups/popups.service";
import {delay, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styles/_import.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(public popupsService: PopupsService) {
  }

  deleteProduct() {
    this.popupsService.hidePopup();
    of(true).pipe(delay(400)).subscribe(() => alert('Product was deleted'))
    ;
  }
}
