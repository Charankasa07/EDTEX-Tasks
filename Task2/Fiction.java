import java.util.*;

public class Fiction extends Book {
    Fiction() throws Exception {
        Book newBook = this.addBook();
        TreeMap<String, Book> fictionBooks = Collections.fictionBooks;
        fictionBooks.put(newBook.getISBN(), newBook);
        System.out.println("\nBook added successfully\n");
    }

    static void viewFictionBooks() {
        TreeMap<String, Book> fictionBooks = Collections.fictionBooks;
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
