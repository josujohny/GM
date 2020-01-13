import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  private subject = new Subject<any>();


    getCategory(): Observable<any> {
        return this.subject.asObservable();
    }

    sendCategory(message: string){
        this.subject.next({ text: message });
    }
}
