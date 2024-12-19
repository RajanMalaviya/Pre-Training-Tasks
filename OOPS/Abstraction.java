abstract class Animal {
    // Abstract method (does not have a body)
    public abstract void sound();
    
    // Regular method
    public void sleep() {
        System.out.println("Zzz");
    }
}

class Dog extends Animal {
    public void sound() {
        System.out.println("Woof");
    }
}

class Cat extends Animal {
    public void sound() {
        System.out.println("Meow");
    }
}

public class Abstraction {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();
        
        myDog.sound();
        myDog.sleep();
        
        myCat.sound();
        myCat.sleep();
    }
}