import { Injectable, inject } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable(
  { providedIn: 'root' }
)
export class MeTubeSocket extends Socket {
  private readonly visitId: string;

  getVisitId(): string {
    return this.visitId;
  }

  constructor() {
    const appRef = inject(ApplicationRef);

    const path =
      document.location.pathname.replace(/share-target/, '') + 'socket.io';
    const visitId = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
    super({ url: '', options: { path, query: { visit_id: visitId } } }, appRef);
    this.visitId = visitId;
  }
}
