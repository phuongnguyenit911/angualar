import { Injectable } from '@angular/core';

import { Observable } from '../../node_modules/rxjs/observable';

import { Hero } from './hero';
import { HeroList} from './mock.hero';
import { MessageService } from './message.service';
import { of } from '../../node_modules/rxjs/observable/of';

@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {}
  heroItem: any;
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HeroList);
  }

  addHeroItem(hero: any) {
    HeroList.push(hero);
  }

  onSelectHero(heroItem: Hero) {
    return heroItem;
  }
}
