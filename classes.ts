interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  public name: string;
  private email: string;  // 'private' = cannot be accessed outside of the class
  protected age: number;
  // city: string;
  // state: string;
  // Runs when you instantiate an object with this class
  constructor(name:string, email:string, age:number) {
  this.name = name;
  this.email = email;
  this.age = age;

  console.log('User created: '+this.name);
  }
  // Method
  public register() {
    console.log(this.name+' is now registered');
  }
  payInvoice() {
    console.log(this.name+ 'paid invoice');
  }
}

// Inheritance
class Member extends User() {
  id: number;

  constructor(id:number, name:string, email:string, age:number) {
    // Grabs info from class User
    super(name, email, age, city, state);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}


let john = new User('John Doe', 'johndoe@gmail.com', 45);

console.log(john.email);

console.log(john.age);

john.register();

let jane: User = new Member(1, 'Jane Doe', 'janedoe@gmail.com', 44);
jane.payInvoice();
