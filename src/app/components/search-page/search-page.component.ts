import { DialogService } from 'src/app/services/dialog.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { concatMap, delay, map, skipWhile, tap } from 'rxjs/operators'
import { IPaginationEvent } from 'src/app/interfaces/pagination-event';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/interfaces/book';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  userName: string;

  booksList$: Observable<IBook[]>;
  totalItems: number;
  textSearched : string;


  constructor(private booksService: BooksService, private router: Router, private dialogService: DialogService) { }

  ngOnInit() {
    this.initUserName();
    this.initBookList();
  }

  initUserName(){
    this.userName = localStorage['userName']
  }

  initBookList(){
    this.booksList$ = this.booksService.getBookList();
  }

  onInput(event){
    this.textSearched = event.target.value;
    console.log(this.textSearched);

    this.booksService.searchBook(this.textSearched).subscribe(totalItems => {
      console.log(totalItems);

      this.totalItems = totalItems;
    })
  }

  onPageChange(event: IPaginationEvent){
    this.booksService.searchBook(this.textSearched, event.first).subscribe();
  }

  onItemClicked(currentBook:IBook){
    console.log('onItemClicked');
    this.dialogService.setDisplay(true);
    this.dialogService.setCurrentBook(currentBook)


  }

  onWishIconClicked(book: IBook){
    book.wished = !book.wished;
    book.wished ? this.booksService.addBookToWishList(book) : this.booksService.removeBookFromWishList(book);
  }

}
