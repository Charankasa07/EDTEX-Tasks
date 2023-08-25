import java.util.*;

public class Patron implements Borrowable {
    private String name;
    private String id;
    private LinkedList<Book> borrowedBooks;

    Patron() {
    }

    Patron(String name, String id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = new LinkedList<Book>();
    }
    //getter method for name
    String getName() {
        return this.name;
    }  
    //getter method for id
    String getID() {
        return this.id;
    }
    //getter method for borrowedBooks
    LinkedList<Book> getBorrowedBooks() {
        return this.borrowedBooks;
    }

    void setBorrowedBooks(Book book) {
        borrowedBooks.add(book);
    }

    static void addPatron() {
        TreeMap<String, Patron> patrons = Collections.patrons;
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter ID of the Patron");
        String id = scn.next();
        //checking whether there is any patron with given id or not
        if (patrons.containsKey(id)) {
            System.out.println("\nPatron with given ID already Exists!!!\n");
        } else {
            System.out.println("Enter Name of the Patron:");
            String name = scn.next();
            Patron patron = new Patron(name, id);
            //storing the patron data in a Collection
            patrons.put(patron.getID(), patron);
            System.out.println("\nPatron added successfully\n");
        }
    }

    static void removePatron() {
        TreeMap<String, Patron> patrons = Collections.patrons;
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter ID of the Patron to be Removed:");
        String id1 = scn.next();
        //checking whether there is any patron with given id or not
        if (patrons.containsKey(id1)) {
            //deleting patron data from the patron Collection
            patrons.remove(id1);
            System.out.println("\nPatron removed successfully\n");
        } else {
            System.out.println("\nNo such Patron found!!!\n");
        }
    }

    static void viewPatrons() {
        TreeMap<String, Patron> patrons = Collections.patrons;
        System.out.println();
        //checking whether there is any data of patrons present
        if (patrons.size() > 0) {
            for (Map.Entry<String, Patron> m : patrons.entrySet()) {
                Patron p = (Patron) m.getValue();
                System.out.println("Name: " + p.getName() + ", ID: " + p.getID() + ", BorrowedBooks: "
                        + p.getBorrowedBooks());
            }
        } else {
            System.out.println("\nNo Patrons till now!!!\n");
        }
    }

    public void borrow() {
        TreeMap<String, Patron> patrons = Collections.patrons;
        TreeMap<String, Book> books = Collections.books;

        Scanner scn = new Scanner(System.in);

        System.out.println("Enter ID of the Patron");
        String id2 = scn.next();
        //checking the existence of the patron
        if (!(patrons.containsKey(id2))) {
            System.out.println("\nNo such Patron Exists!!!\n");
            return;
        }
        System.out.println("Enter ISBN of the Book");
        String isbn2 = scn.next();
        //checking the existence of the book
        if (!(books.containsKey(isbn2))) {
            System.out.println("\nNo such Book Found!!!\n");
            return;
        }
        Book b = (Book) books.get(isbn2);
        //checking the availability of the book in the library
        if (!(b.getQuantity() > 0)) {
            System.out.println("\nBook Unavailable!!!\n");
            return;
        }
        Patron p = (Patron) patrons.get(id2);
        //checking whether the patron already holds this book or not
        if (p.getBorrowedBooks().contains(b)) {
            System.out.println("\nThis Book has been Already Borrowed by this Patron!!!\n");
            return;
        }
        //decreasing the available quantity of the book
        b.decreaseQuantity();
        //storing the book data in the patrons borrowed books data
        p.setBorrowedBooks(b);
        System.out.println("\nBook Borrowed Successfully\n");
    }

    public void returnBook() {
        TreeMap<String, Patron> patrons = Collections.patrons;
        TreeMap<String, Book> books = Collections.books;
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter ID of the Patron");
        String id3 = scn.next();
        //checking for the existence of patron
        if (!(patrons.containsKey(id3))) {
            System.out.println("\nNo such Patron Found!!!\n");
            return;
        }
        System.out.println("Enter ISBN of the Book");
        String isbn3 = scn.next();
        //checking for the existence of the book
        if (!(books.containsKey(isbn3))) {
            System.out.println("\nNo such Book Found!!!\n");
            return;
        }
        Book b1 = (Book) books.get(isbn3);
        Patron p1 = (Patron) patrons.get(id3);
        //checking whether the patrons has borrowed the book or not
        if (!(p1.getBorrowedBooks().contains(b1))) {
            System.out.println("\nThis Patorn doesnt borrowed this Book!!!\n");
            return;
        }
        //increasing quantity of the book as the patron has returned it
        b1.increaseQuantity();
        //removing the book data from the patrons borrowed books data as patron returned it
        p1.getBorrowedBooks().remove(b1);
        System.out.println("\nBook Returned Successfully\n");
    }
}
