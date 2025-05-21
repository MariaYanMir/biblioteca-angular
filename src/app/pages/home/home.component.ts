import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

export interface Book {
  title: string;
  author: string;
  age: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  books = [
    {
      title: 'Rayuela',
      author: 'Julio Cortázar',
      age: 1963,
    },
    {
      title: 'Adoración',
      author: 'Miguel Zamorano',
      age: 2025,
    },
    {
      title: 'Facendera',
      author: 'Óscar García Sierra',
      age: 2023,
    },
    {
      title: 'Ropa tendida',
      author: 'Óscar García Sierra',
      age: 2024,
    },
  ];

  search = '';
  filteredBooks: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.filteredBooks = [...this.books];
  }

  removeBook(bookRemoved: Book) {
    this.books = this.books.filter((book) => book.title !== bookRemoved.title);

    this.filterBooks(this.search);
  }

  filterBooks(bookFiltered: string) {
    const search = bookFiltered.toLowerCase();

    this.filteredBooks = this.books.filter((book: Book) => {
      for (let prop in book) {
        const value = (book as any)[prop];

        if (typeof value === 'string' && value.toLowerCase().includes(search)) {
          return true;
        }

        if (typeof value === 'number' && value.toString().includes(search)) {
          return true;
        }
      }

      return false;
    });
  }
}
