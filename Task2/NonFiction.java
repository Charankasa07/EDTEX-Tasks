import java.util.Map;
import java.util.TreeMap;

public class NonFiction extends Book {
    NonFiction() throws Exception {
        //storing the book object from Book.addBook() method
        Book newBook = this.addBook();
        TreeMap<String, Book> nonFictionBooks = Collections.nonFictionBooks;
        //storing the data in non fiction books collection
        nonFictionBooks.put(newBook.getISBN(), newBook);
        System.out.println("\nBook added successfully\n");
    }

    static void viewNonFictionBooks() {
        TreeMap<String, Book> nonFictionBooks = Collections.nonFictionBooks;
        //checking whether their present any book data or not
        if (nonFictionBooks.size() > 0) {
            for (Map.Entry<String, Book> m : nonFictionBooks.entrySet()) {
                Book b = m.getValue();
                System.out.println("ISBN: " + b.getISBN() + ", Title: " + b.getTitle() + " , Author: " + b.getAuthor()
                        + " ,Copies: " + b.getQuantity());
            }
        } else {
            System.out.println("\nNo Non-Fiction Books till now!!!\n");
        }
    }
}
