import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  getQuote():Promise<String> {

    return Promise.resolve('msg do serviço');

  }
}
