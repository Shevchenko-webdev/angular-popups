import {Injectable} from "@angular/core";

export type PopupType = null | 'confirm' | 'copy-code';
@Injectable()

export class PopupsService {
  private _popup: PopupType

  set popup(popupName: PopupType) {
    this._popup = popupName;
  }

  get popup() {
    return this._popup;
  }

  hidePopup() {
    this._popup = null;
  }
}
