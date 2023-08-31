import {NgModule} from "@angular/core";
import {PopupsService} from "./popups.service";
import {PopupLayoutComponent} from "./popup-layout/popup-layout.component";
import {CommonModule} from "@angular/common";
import {ConfirmPopupComponent} from "./confirm-popup/confirm-popup.component";
import { CopyCodeComponent } from './copy-code/copy-code.component';
import {Popup} from "./popup";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Popup,
    PopupLayoutComponent,
    ConfirmPopupComponent,
    CopyCodeComponent
  ],
  providers: [
    PopupsService
  ],
  exports: [
    PopupLayoutComponent,
    ConfirmPopupComponent,
    CopyCodeComponent
  ]
})

export class PopupsModule {}
