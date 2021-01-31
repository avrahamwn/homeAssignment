import { IBook } from './../interfaces/book';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  displayDialog$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  currentBook$: BehaviorSubject<IBook> = new BehaviorSubject(null);;

  constructor() { }



  setDisplay(display){
   this.displayDialog$.next(display)
  }

  setCurrentBook(currentBook){
    this.currentBook$.next(currentBook)
  }

}
