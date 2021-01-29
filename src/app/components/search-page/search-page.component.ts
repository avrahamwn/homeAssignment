import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { concatMap, delay, map, skipWhile, tap } from 'rxjs/operators'
import { PaginationEvent } from 'src/app/interfaces/pagination-event';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  userName: string = 'username';
  searchControl: FormControl = new FormControl();
  booksList;
  totalItems: number;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.initControlAndBookList()
  }



  initControlAndBookList() {
    this.searchControl.valueChanges.pipe(
      skipWhile(textTosearch => {
        return !textTosearch
      }),
      concatMap((textToSearch: string) => {
        return this.booksService.searchBook(textToSearch);
      }),
      skipWhile(textTosearch => {
        return !textTosearch
      }),
      tap(results => {
        console.log(results);
        this.totalItems = results.totalItems;
      }),
      map(results => {
        return results.items;
      })
    ).subscribe(results => {
      this.booksList = results;
    });
  }

  onPageChange(event: PaginationEvent){
    console.log(event);
    let textToSearch = this.searchControl.value;
    this.booksService.searchBook(textToSearch, event.first).pipe(tap(console.log),
    map(results => {
      return results.items;
    })
    ).subscribe(results => {
      this.booksList = results;
    });

  }

  onWishIconClicked(){

  }
  onCheckedhIconClicked(){

  }

}
