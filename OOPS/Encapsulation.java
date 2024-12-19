public class Encapsulation {
    // private variables
    private String name;
    private int age;

    // public getter method for name
    public String getName() {
        return name;
    }

    // public setter method for name
    public void setName(String name) {
        this.name = name;
    }

    // public getter method for age
    public int getAge() {
        return age;
    }

    // public setter method for age
    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        } else {
            System.out.println("Age cannot be negative or zero");
        }
    }

    public static void main(String[] args) {
        Encapsulation obj = new Encapsulation();
        obj.setName("John");
        obj.setAge(25);

        System.out.println("Name: " + obj.getName());
        System.out.println("Age: " + obj.getAge());
    }
}