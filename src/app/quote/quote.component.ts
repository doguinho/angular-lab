import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quote: string;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
  }

  getQuote():void {
    this.quoteService.getQuote().then((quote:string) => {
      this.quote = quote;
    });
  };

}
