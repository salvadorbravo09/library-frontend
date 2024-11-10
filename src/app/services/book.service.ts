import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'http://localhost:8080/api/book'; // Url con la que nos comunicaremos con el backend

  constructor() {}
}
