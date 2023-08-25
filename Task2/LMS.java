import java.util.Scanner;

public class LMS {
    public static void main(String[] args) {
        Patron dummyPatron = new Patron();
        
        while (true) {
            Scanner scn = new Scanner(System.in);
            System.out.println("1) Add a New Book");
            System.out.println("2) Remove a Book");
            System.out.println("3) Display Available Books");
            System.out.println("4) Add a Patron");
            System.out.println("5) Remove a Patron");
            System.out.println("6) Display Patrons");
            System.out.println("7) Borrow a Book");
            System.out.println("8) Return a Book");
            System.out.println("9) Exit the Program");
            int choice = scn.nextInt();
            switch (choice) {
                case 1:
                    Book.addBook();
                    break;
                case 2:
                    Book.removeBook();
                    break;
                case 3:
                    Book.viewBooks();
                    break;
                case 4:
                    Patron.addPatron();
                    break;
                case 5:
                    Patron.removePatron();
                    break;
                case 6:
                    Patron.viewPatrons();
                    break;
                case 7:
                    dummyPatron.borrow();
                    break;
                case 8:
                    dummyPatron.returnBook();
                    break;
                case 9:
                    System.exit(0);
                    scn.close();
            }

        }
    }

}