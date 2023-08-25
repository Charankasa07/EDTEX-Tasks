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

    String getName() {
        return this.name;
    }

    String getID() {
        return this.id;
    }

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
        if (patrons.containsKey(id)) {
            System.out.println("Patron with given ID already Exists!!!");
        } else {
            System.out.println("Enter Name of the Patron:");
            String name = scn.next();
            Patron patron = new Patron(name, id);
            patrons.put(patron.getID(), patron);
        }
    }

    static void removePatron() {
        TreeMap<String, Patron> patrons = Collections.patrons;
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter ID of the Patron to be Removed:");
        String id1 = scn.next();
        patrons.remove(id1);
    }

    static void viewPatrons() {
        TreeMap<String, Patron> patrons = Collections.patrons;
        for (Map.Entry<String, Patron> m : patrons.entrySet()) {
            Patron p = (Patron) m.getValue();
            System.out.println("Name: " + p.getName() + ", ID: " + p.getID() + ", BorrowedBooks: "
                    + p.getBorrowedBooks());
        }
    }

    public void borrow() {
        TreeMap<String, Patron> patrons = Collections.patrons;
        TreeMap<String, Book> books = Collections.books;

        Scanner scn = new Scanner(System.in);

        System.out.println("Enter ID of the Patron");
        String id2 = scn.next();
        if (!(patrons.containsKey(id2))) {
            System.out.println("No such Patron Exists!!!\n");
            return;
        }
        System.out.println("Enter ISBN of the Book");
        String isbn2 = scn.next();
        if (!(books.containsKey(isbn2))) {
            System.out.println("No such Book Found!!!");
            return;
        }
        Book b = (Book) books.get(isbn2);
        if (!(b.getQuantity() > 0)) {
            System.out.println("Book Unavailable!!!");
            return;
        }
        Patron p = (Patron) patrons.get(id2);
        if (p.getBorrowedBooks().contains(b)) {
            System.out.println("This Book has been Already Borrowed by this Patron!!!");
            return;
        }
        b.decreaseQuantity();
        p.setBorrowedBooks(b);
        System.out.println("Book Borrowed Successfully");
    }

    public void returnBook() {
        TreeMap<String, Patron> patrons = Collections.patrons;
        TreeMap<String, Book> books = Collections.books;
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter ID of the Patron");
        String id3 = scn.next();
        if (!(patrons.containsKey(id3))) {
            System.out.println("No such Patron Found!!!");
            return;
        }
        System.out.println("Enter ISBN of the Book");
        String isbn3 = scn.next();
        if (!(books.containsKey(isbn3))) {
            System.out.println("No such Book Found!!!");
            return;
        }
        Book b1 = (Book) books.get(isbn3);
        Patron p1 = (Patron) patrons.get(id3);
        if (!(p1.getBorrowedBooks().contains(b1))) {
            System.out.println("This Patorn doesnt borrowed this Book!!!");
            return;
        }
        b1.increaseQuantity();
        p1.getBorrowedBooks().remove(b1);
        System.out.println("Book Returned Successfully");
    }
}
