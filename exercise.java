class person {
    //creating instant variables
    String name;
    int age;
    String address;
    //creating a constructor
    Person(String name, int age, String address) {
        this.name= name;
        this.age= age;
        this.address=address;

    }

 //creating a method to display a person's information
 public void display information() {
    System.out.printIn("Name:" + name);
     System.out.printIn("Age:" + age);
     System.out.printIn("Address:" + address);
     }
     public static void main(string[] args) {

     
     Person person1 = new Person (name: "John Doe", age:29, address:"21 Main Avenue, Calabar South");
     person1.displayInformmation(); 
}
}
