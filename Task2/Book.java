import java.util.*;

public class Book {
    private String title;
    private String author;
    private String ISBN;
    private int quantity;

    Book() {
    }

    Book(String title, String author, String ISBN, int quantity) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.quantity = quantity;
    }
    //getter method for title
    String getTitle() {
        return this.title;
    }
    //getter method for author
    String getAuthor() {
        return this.author;
    }
    //getter method for ISBN number
    String getISBN() {
        return this.ISBN;
    }
    //getter method for Quantity
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

    Book addBook() throws Exception {
        TreeMap<String, Book> books = Collections.books;
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter ISBN Number:");
        String isbn = scn.next();
        //checking whether any book is there with given ISBN number
        if (books.containsKey(isbn)) { 
            throw new Exception("Book with the given ISBN already exists!!!!!!!!");
            
        } else {
            System.out.println("Enter title of the Book:");
            String title = scn.next();
            System.out.println("Enter Author for the Book:");
            String author = scn.next();
            System.out.println("Enter Number of Copies Available:");
            int quantity = scn.nextInt();
             //restricting the creation of book instance if quantity is less than 0
            if (quantity < 1) {
                throw new IllegalArgumentException("Number of copies must be greater than zero.");
            }
            Book book = new Book(title, author, isbn, quantity);
             //adding book object to books Collection
            books.put(book.getISBN(), book);
            //returning the book object to store in respective book data
            return book; 
        }
    }

    static void removeBook() {
        TreeMap<String, Book> books = Collections.books;
        TreeMap<String, Book> fictionBooks = Collections.fictionBooks;
        TreeMap<String, Book> nonFictionBooks = Collections.nonFictionBooks;
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the ISBN Number of the Book to be Removed:");
        String isbn1 = scn.next();
        //checking whether any book is there with given ISBN number
        if (books.containsKey(isbn1)) { 
            //removing book data from books data
            books.remove(isbn1);
            //removing book data from fiction data if present
            fictionBooks.remove(isbn1);
            //removing book data from non fiction data if present
            nonFictionBooks.remove(isbn1);
            System.out.println("\nBook removed successfully\n");
        } else {
            System.out.println("\nNo such Book found!!!\n");
        }

    }

    static void viewBooks() {
        TreeMap<String, Book> books = Collections.books;
        System.out.println();
        // checking whether their are any books data available or not
        if (books.size() > 0) { 
            for (Map.Entry<String, Book> m : books.entrySet()) {
                Book b = (Book) m.getValue();
                System.out.println("ISBN: " + b.getISBN() + ", Title: " + b.getTitle() + " , Author: " + b.getAuthor()
                        + " ,Copies: "
                        + b.getQuantity());
            }
        } else {
            System.out.println("\nNo Books till now!!!\n");
        }
    }
}
