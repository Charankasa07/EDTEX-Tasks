import java.util.*;

public class Fiction extends Book {
    Fiction() throws Exception {
        //storing the book object from Book.addBook() method
        Book newBook = this.addBook(); 
        TreeMap<String, Book> fictionBooks = Collections.fictionBooks;
        //storing the book data in fiction books Collection
        fictionBooks.put(newBook.getISBN(), newBook); 
        System.out.println("\nBook added successfully\n");
    }

    static void viewFictionBooks() {
        TreeMap<String, Book> fictionBooks = Collections.fictionBooks;
        //checking whether their present any book data or not
        if (fictionBooks.size() > 0) {
            for (Map.Entry<String, Book> m : fictionBooks.entrySet()) {
                Book b = m.getValue();
                System.out.println("ISBN: " + b.getISBN() + ", Title: " + b.getTitle() + " , Author: " + b.getAuthor()
                        + " ,Copies: " + b.getQuantity());
            }
        } else {
            System.out.println("\nNo Fiction Books till now!!!\n");
        }
    }
}
