import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { PatronListComponent } from './patron-list/patron-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddPatronComponent } from './add-patron/add-patron.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DisplayBooksComponent } from './display-books/display-books.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    BookListComponent,
    PatronListComponent,
    AddBookComponent,
    AddPatronComponent,
    BorrowBookComponent,
    ReturnBookComponent,
    EditProfileComponent,
    DisplayBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
