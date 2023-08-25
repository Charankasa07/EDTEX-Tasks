
# Library Management System

### Classes

- ##### LMS
- ##### Book
- ##### Fiction
- ##### NonFiction
- ##### Patron
- ##### Collections

### Collections used:

- TreeMap
- LinkedList

### How to Compile & Run

> - The Main Class is in LMS.java file  
> - So, compile this LMS.java file using the command javac LMS.java  
> - The main class name is LMS which is present inside the LMS.java file  
> - So, run this LMS class by using the command java LMS  

### Working of System

>  First of all, the user is displayed with different operations that he can perform using this system

#### Add a Book

> After taking the inputs from the user , it checks whether there is already a book with given ISBN number or not. If not, then it adds the book into the Books collection and respective category collection either fiction or non fiction.

#### Remove a Book

> After taking the ISBN number as input, it checks whether there is a book with given ISBN number or not. If yes, it deletes the book from the Books collection and respective category collection either fiction or non fiction/

#### Display Available Books

> Displays all the available books in the Library.

#### Add a Patron

> After taking the inputs from the user , it checks whether there is already a patron with given ID number or not. If not, then it adds the patron into the Patron collection.

#### Remove a Patron

> After taking the ID number as input, it checks whether there is a patron with given ID number or not. If yes, it deletes the patron from the Patrons collection.

#### Display Patrons

> Displays all the available patrons in the Library.

#### Borrow a Book

> After giving the patrons ID number, it checks whether there is any patron with the given ID or not. If yes,it checks whether there is any book with the given ISBN number or not. If yes, it checks whether the book is available or not. If yes, it checks whether the patron already possess that book or not. If not, then the borrowing of the book will be success and the book data is added into the respective patrons data and books quantity is reduced by 1.

#### Return a Book

> After giving the patrons ID number, it checks whether there is any patron with the given ID or not. If yes,it checks whether there is any book with the given ISBN number or not.If yes, it checks whether the patron borrowed that book or not.If yes, then the return process will happen by removing the specified book from the patrons data and incrementing the quantity of book by 1.

#### Display Fiction Books

> Displays all the available fiction books in the Library.

#### Display Non Fiction Books

> Displays all the available non fiction books in the Library.