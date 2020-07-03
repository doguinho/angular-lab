import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { QuoteComponent } from './quote.component';
import { QuoteService } from './quote.service';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;

  class MockQuoteService {
    public quote: string = 'Test quote';
  
    getQuote() {
      return Promise.resolve(this.quote);
    }
  }
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteComponent ],
      providers: [
        { provide: QuoteService, useClass: MockQuoteService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get quote', async(inject([], () => {
    fixture.componentInstance.getQuote();
    fixture.whenStable()
      .then(() => {
        fixture.detectChanges();
        return fixture.whenStable();
      })
      .then(() => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div').innerText).toEqual('Test quote');
      });
  })));

});
