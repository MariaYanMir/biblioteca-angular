import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../pages/home/home.component';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.scss',
})
export class LibroComponent {
  @Input() book: Book;

  @Output() removedBook = new EventEmitter();

  emitRemovedBook() {
    this.removedBook.emit(this.book);
  }
}
