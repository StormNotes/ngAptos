import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { CommentsComponent } from './cards/comments/comments.component';
import { ExpensasComponent } from './app/expensas/expensas.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardComponent,
    CommentsComponent,
    ExpensasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
