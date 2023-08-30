import { Injectable, inject } from '@angular/core';
import { Hero } from './heroes';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  updateHero(selectedHero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, selectedHero, this.httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${selectedHero.id}`)),
      catchError(this.handleError<any>(`updateHero`))
    );
  }
  private heroesUrl = 'api/heroes'; // URL to web api
  messageService: MessageService = inject(MessageService);

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES)
    // this.messageService.add("Hero Service : fetched heroes")
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log('Fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  getHeroById(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    // const hero = HEROES.find((hero) => hero.id === id)!;
    // this.messageService.add(`Hero Service : fetched hero id : ${hero.id}`);
    // return of(hero);
    return this.http.get<Hero>(url).pipe(
      tap((_) => this.log(`Fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  constructor(private http: HttpClient) {}

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted hero id = ${id}`)),
      catchError(this.handleError<Hero>(`delete Hero`))
    );
  }
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found heroes matching term = ${term}`)
          : this.log(`not found heroes maching term ${term}`)
      ),
      catchError(this.handleError<Hero[]>(`searchHeroes`, []))
    );
  }
}
