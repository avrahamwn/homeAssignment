import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
      WelcomeScreenComponent,
      SearchPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
