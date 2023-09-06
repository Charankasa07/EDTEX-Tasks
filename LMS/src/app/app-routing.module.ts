import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddPatronComponent } from './add-patron/add-patron.component';
import { BookListComponent } from './book-list/book-list.component';
import { BorrowBookComponent } from './borrow-book/borrow-book.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { DisplayPatronsComponent } from './display-patrons/display-patrons.component';
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
    title:"Login"
  },
  {
    path: 'register',
    component: RegistrationComponent,
    title:"Registration"
  },
  {
    path: 'book-list',
    component: BookListComponent,
    title:"Dashboard",
    children: [
      {
        path: 'borrow-book',
        component: BorrowBookComponent,
        title:"Borrow Book"
      },
      {
        path: 'return-book',
        component: ReturnBookComponent,
        title:"Return Book"
      },
      {
        path:'edit-profile',
        component:EditProfileComponent,
        title:"Edit Profile"
      },
      {
        path:'view-books',
        component:DisplayBooksComponent,
        title:"Books"
      }
    ],
  },
  {
    path: 'patron-list',
    component: PatronListComponent,
    title:"Dashboard",
    children: [
      {
        path: 'add-patron',
        component: AddPatronComponent,
        title:"Add Patron"
      },
      {
        path: 'add-book',
        component: AddBookComponent,
        title:"Add Book"
      },
      {
        path:'view-books',
        component : DisplayBooksComponent,
        title:"Books"
      },
      {
        path:'view-patrons',
        component:DisplayPatronsComponent,
        title:"Patrons"
      }
    ],
  },
  {
    path: '',
    component: HomeComponent,
    title:"Library Management System"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
