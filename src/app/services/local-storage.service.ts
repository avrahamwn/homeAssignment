import { IBook } from './../interfaces/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {

  }

  setUserNameInLocalStorage(name: string) {
    localStorage.setItem("userName", name)

  }

  setWishListInLocalStorage(wishList: IBook[]) {
    localStorage.setItem('wishList', JSON.stringify(wishList));

  }

  getUserNameFromLocalStorage() {
    return localStorage.getItem('userName');
  }

  getWishListFromLocalStorage(): IBook[] {
    return JSON.parse(localStorage.getItem('wishList'))  ? JSON.parse(localStorage.getItem('wishList')) : [];
  }

}
