import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private messageService: MessageService) {}

  addMessage(severity: 'success' | 'error', summary: string, detail: string) {
      this.messageService.add({severity:severity, summary:summary, detail:detail});
  }

  clear() {
    this.messageService.clear();
}

}
