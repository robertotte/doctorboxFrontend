import { Injectable, EventEmitter, Output } from '@angular/core';
@Injectable()
export class AccountModalService {
  modal: String = '';
  options: any;
  @Output()
  isModalCalled = new EventEmitter<boolean>();

  constructor() { }

  setModal(modal: string) {
    this.modal = modal;
  }

  getModal() {
    return this.modal;
  }

  emitModalCalled() {
    this.isModalCalled.emit(true);
  }

  setOptions(options: any) {
    this.options = options;
  }

  getOptions() {
    return this.options;
  }



}
