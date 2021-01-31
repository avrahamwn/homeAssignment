import { DialogService } from 'src/app/services/dialog.service';
import { IBook } from './../../interfaces/book';
import { BooksService } from './../../services/books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  userName:string;
  wishList: IBook[];

  constructor(private booksService: BooksService, private dialogService: DialogService) { }

  ngOnInit() {
    this.initUserName();
    this.initWishList();
  }

  initUserName(){
    this.userName = localStorage['userName']
  }

  initWishList(){
    this.wishList = this.booksService.getWishList();
  }

  onRemovehIconClicked(book:IBook){
    this.booksService.removeBookFromWishList(book);
  }

  onItemClicked(currentBook:IBook){
    console.log('onItemClicked');
    this.dialogService.setDisplay(true);
    this.dialogService.setCurrentBook(currentBook)


  }

}
