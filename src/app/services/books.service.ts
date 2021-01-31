import { LocalStorageService } from './local-storage.service';
import { Book, IBook } from './../interfaces/book';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessagesService } from './messages.service';




@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private wishList: IBook[] = [];
  private bookList$: BehaviorSubject<IBook[]> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private messagesService: MessagesService) {
    this.initWishList()
  }

  initWishList() {
    this.wishList = this.localStorageService.getWishListFromLocalStorage();

  }

  searchBookAndGetTotalItems(keyWords: string, startIndex: number = 0): Observable<number> {
    if (!keyWords){
      this.bookList$.next([]);
      return of(0);
    }

    keyWords = keyWords.split(' ').join('+');
    const ApiAddress = 'https://www.googleapis.com/books/v1/volumes?maxResults=20&q=' + keyWords + '&startIndex=' + startIndex;

    return this.http.get(ApiAddress).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error(err);
        this.messagesService.addMessage('error', 'An Error has occurred', 'An Error has occurred during your request process. please try again')
        return of({totalItems:0, items: [] });
      }),
      tap((result: { totalItems: number, items: any[] }) => {
        console.log(result);
        let items: IBook[] = result.items.map(item => new Book(item.volumeInfo, item.id));
        items.forEach(book => {
          book.wished = !!this.wishList.find(wishBook => wishBook.id === book.id);
        })
        this.bookList$.next(items);
      }),
      map(result => result.totalItems)
    );

  }

  addBookToWishList(book: IBook) {
    this.wishList.push(book);
    this.localStorageService.setWishListInLocalStorage(this.wishList);
    console.log('wishList:\n', this.wishList);
    this.messagesService.addMessage('success', 'Item added successfuly!', 'The book was successfuly added to your Wish List')

  }

  removeBookFromWishList(book: IBook) {
    const bookIndex = this.wishList.findIndex(exsitedBook => book.id == exsitedBook.id);
    this.wishList.splice(bookIndex, 1);
    this.localStorageService.setWishListInLocalStorage(this.wishList);
    this.messagesService.addMessage('success', 'Item removed successfuly!', 'The book was successfuly removed to your Wish List')
    console.log('wishList:\n', this.wishList);

  }

  getWishList(): IBook[] {
    return this.wishList;
  }

  getBookList(): Observable<IBook[]> {
    return this.bookList$
  }
}
