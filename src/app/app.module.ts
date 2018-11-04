import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesListComponent} from './heroes/heroes.component';
import { MessagesComponent } from './message/messages.component';
import { MessageService } from './message.service';
import { HeroService } from './hero.service';
import { CourseService } from './course.service';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesListComponent,
    MessagesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService,
    HeroService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
