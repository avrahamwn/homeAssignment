import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { DialogService } from 'src/app/services/dialog.service';
import { IBook } from 'src/app/interfaces/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  showBookDetails: boolean;
  // currentBook;
  currentBook$ :Observable<IBook>;


  constructor(private booksService: BooksService, private dialogService: DialogService) { }

  ngOnInit() {
    this.initDisplayDialog();
    this.initCurrentBook();

  }

  initDisplayDialog() {
    this.dialogService.displayDialog$.subscribe(display => {
      this.showBookDetails = display;
    })
  }

  initCurrentBook(){
    this.currentBook$ = this.dialogService.currentBook$;
  }

  // initCurrentBook() {
  //  this.dialogService.currentBook$.subscribe(currentBook => {
  //    this.currentBook = currentBook;
  //  })
  // }
}
