import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonsComponent } from './persons/persons.component';
import { FormsModule } from '@angular/forms';
import { ApplyRedColorDirective } from './apply-red-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonsComponent,
    ApplyRedColorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
