interface Bank {
    void deposit();
    void withdraw();
    interface Loan {
        void apply();
    }
}

class SBI implements Bank {
    public void deposit() {
        System.out.println("Depositing in SBI");
    }
    public void withdraw() {
        System.out.println("Withdrawing from SBI");
    }
    class SBI_Loan implements Loan {
        public void apply() {
            System.out.println("Applying for loan in SBI\n");
        }
    }
}

class HDFC implements Bank {
    public void deposit() {
        System.out.println("Depositing in HDFC");
    }
    public void withdraw() {
        System.out.println("Withdrawing from HDFC");
    }
    class HDFC_Loan implements Loan {
        public void apply() {
            System.out.println("Applying for loan in HDFC\n");
        }
    }
}

public class Interface {
    public static void main(String[] args) {
        Bank sbi = new SBI();
        sbi.deposit();
        sbi.withdraw();
        Bank.Loan sbiLoan = new SBI().new SBI_Loan();
        sbiLoan.apply();

        Bank hdfc = new HDFC();
        hdfc.deposit();
        hdfc.withdraw();
        Bank.Loan hdfcLoan = new HDFC().new HDFC_Loan();
        hdfcLoan.apply();
    }
}