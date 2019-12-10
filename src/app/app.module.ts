import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccontSearchComponent } from './accont-search/accont-search.component';
import { HomeComponent } from './home/home.component';
import { DatedPipe } from './accont-search/dated.pipe';
import { HighlightDirective } from './accont-search/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccontSearchComponent,
    HomeComponent,
    DatedPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: '/', component: AccontSearchComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
