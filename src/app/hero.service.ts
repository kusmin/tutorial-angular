import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './heroes/hero';
import { MessageService } from './message.service';
import { Heroes } from './mock-heroes';



@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id:): Observable<Hero> {
    const hero = Heroes.find(h => h.id === id) as Hero;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
