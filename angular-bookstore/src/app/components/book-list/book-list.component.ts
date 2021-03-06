import { BookService } from './../../services/book.service';
import { Book } from './../../common/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks() {
    this._bookService.getBooks().subscribe(
      data => this.books = data
    )
  }
}
