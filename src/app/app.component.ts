import { Component, OnInit } from '@angular/core';
import { of, Observable, interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-lab';

  ngOnInit(): void {

    //o mergeMapa é um jeito de fazer várias chamadas de vários tipos, como promisse, observables, 
    // e comuns encadeadas de forma que a próxima só inicia quando a anterior teve retorno

    of({}).pipe(
      mergeMap(sucesso => this.teste()),
      mergeMap(sucesso => interval(5000).pipe(x => this.teste2(sucesso))),
      mergeMap(sucesso => this.teste3())
    ).subscribe(
      
    )

    console.log('fim');
    
  }

  teste():Observable<string>{
    return new Observable(
      obs => {
        console.log('teste1')
        obs.next('teste1')
      }
    )
  }

  teste2(param:string):Observable<string>{
    return new Observable(
      obs => {
        console.log('teste2')
        obs.next(param)
      }
    )
  }

  teste3():String{
    console.log('teste3');
    
    return 'teste3'
  }

}
