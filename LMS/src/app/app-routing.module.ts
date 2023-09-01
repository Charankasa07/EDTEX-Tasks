import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddPatronComponent } from './add-patron/add-patron.component';
import { BookListComponent } from './book-list/book-list.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatronListComponent } from './patron-list/patron-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReturnBookComponent } from './return-book/return-book.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'book-list',
    component: BookListComponent,
    children: [
      {
        path: 'borrow-book',
        component: BorrowBookComponent,
      },
      {
        path: 'return-book',
        component: ReturnBookComponent,
      },
      {
        path:'edit-profile',
        component:EditProfileComponent
      }
    ],
  },
  {
    path: 'patron-list',
    component: PatronListComponent,
    children: [
      {
        path: 'add-patron',
        component: AddPatronComponent,
      },
      {
        path: 'add-book',
        component: AddBookComponent,
      },
      {
        path:'view-books',
        component : DisplayBooksComponent
      }
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
