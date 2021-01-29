import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }



  searchBook(keyWords:string):Observable<any>{
    if(!keyWords) return of(false);

    keyWords = keyWords.split(' ').join('+');
    let ApiAddress = 'https://www.googleapis.com/books/v1/volumes?maxResults=20&q=' + keyWords;

    return this.http.get(ApiAddress).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error(err);
        return of(false);
      })
    );

  }
}
