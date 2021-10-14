import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponent } from './pages/global/global.component';
import { NavComponent } from './pages/global/nav/nav.component';
import { FilmsComponent } from './pages/global/films/films.component';
import { HeroComponent } from './pages/global/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalComponent,
    NavComponent,
    FilmsComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
