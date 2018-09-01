// import { HeroList} from '../mock.hero';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesListComponent implements OnInit {
    heroes: any;
    selectedHero: Hero;
    heroItem: Hero;
    @ViewChild('addId') id: ElementRef;
    @ViewChild('addName') name: ElementRef;
    @ViewChild('addAge') age: ElementRef;

    constructor(private heroService: HeroService) { }
    ngOnInit() {
        // set value on componenet
        // this.heroes = HeroList;
        // call function set value from service
        this.getHeroes();
    }
    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
    addHero(addId: any, addName: string, addAge: any) {
        if (addId !== '' && addName !== '' && addAge !== '') {
            this.heroItem = {id: addId, name: addName, age: addAge};
            this.heroService.addHeroItem(this.heroItem);
            this.id.nativeElement.value = '';
            this.name.nativeElement.value = '';
            this.age.nativeElement.value = '';
        }else {
            alert('value is undefined! please input value');
        }
    }
    onSelect(hero: Hero): void {
        // this.selectedHero = hero;
        // call function in service
        this.selectedHero = this.heroService.onSelectHero(hero);
    }
}
