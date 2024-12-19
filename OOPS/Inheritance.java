class Parent {
    String name = "Parent";
    void show() {
        System.out.println("Parent's show()");
    }
}

class Child extends Parent {
    // String name = "Child";
    void show() {
        System.out.println("Child's show()");
        System.out.println("Name: " + name);
    }
}

class GrandChild extends Child {
    
}
public class Inheritance {
    public static void main(String[] args) {
        Parent obj1 = new Parent();
        obj1.show();

        Parent obj2 = new Child();
        obj2.show();

        Parent obj3 = new GrandChild();
        obj3.show();
    }
}
