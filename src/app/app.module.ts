import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { BackStoryComponent } from './back-story/back-story.component';
import { TestComponent } from './test/test.component';
import { CharacterClassListComponent } from './character-class-list/character-class-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { BossmonstersModule } from './bossmonsters/bossmonsters.module';


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    BackStoryComponent,
    TestComponent,
    CharacterClassListComponent,
    ClassDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BossmonstersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
