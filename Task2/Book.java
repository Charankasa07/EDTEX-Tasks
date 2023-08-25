import java.util.*;

public class Book {
    protected String title;
    protected String author;
    protected String ISBN;
    protected int quantity;

    Book(String title, String author, String ISBN, int quantity) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.quantity = quantity;
    }

    String getTitle() {
        return this.title;
    }

    String getAuthor() {
        return this.author;
    }

    String getISBN() {
        return this.ISBN;
    }

    int getQuantity() {
        return this.quantity;
    }

    void decreaseQuantity() {
        this.quantity -= 1;
    }

    void increaseQuantity() {
        this.quantity += 1;
    }

    public String toString() {
        return "{Title : " + this.title + ", Author : " + this.author + "}";
    }

    static void addBook() {
        TreeMap<String, Book> books = Collections.books;
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter ISBN Number:");
        String isbn = scn.next();
        if (books.containsKey(isbn)) {
            System.out.println("Book with the given ISBN already exists!!!!!!!!");
        } else {
            System.out.println("Enter title of the Book:");
            String title = scn.next();
            System.out.println("Enter Author for the Book:");
            String author = scn.next();
            System.out.println("Enter Number of Copies Available:");
            int quantity = scn.nextInt();
            if(quantity<1){
                throw new IllegalArgumentException("Number of copies must be greater than zero.");
            }
            Book book = new Book(title, author, isbn, quantity);
            books.put(book.getISBN(), book);
        }
    }

    static void removeBook() {
        TreeMap<String, Book> books = Collections.books;
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the ISBN Number of the Book to be Removed:");
        String isbn1 = scn.next();
        books.remove(isbn1);
    }
    static void viewBooks(){
        TreeMap<String, Book> books = Collections.books;
        for (Map.Entry<String, Book> m : books.entrySet()) {
            Book b = (Book) m.getValue();
            System.out.println("ISBN: "+b.getISBN()+", Title: " + b.getTitle() + " , Author: " + b.getAuthor() + " ,Copies: "
                    + b.getQuantity());
        }
    }
}
