export interface IBook {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  language: string;
  wished:boolean;

}

export class Book {
  wished: boolean;
  title;
  subtitle;
  authors;
  publisher;
  publishedDate;
  description;
  language;
  id;
  constructor({title, subtitle, authors, publisher, publishedDate, description, language} : IBook, id) {
    this.title = title;
    this.subtitle = subtitle;
    this.authors = authors;
    this.publisher = publisher;
    this.publishedDate = publishedDate;
    this.description = description;
    this.language = language;
    this.id = id;
  }
}


