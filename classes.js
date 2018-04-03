// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = Object.setPrototypeOf ||
//         ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//         function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
//     return function (d, b) {
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// var User = /** @class */ (function () {
//     // city: string;
//     // state: string;
//     // Runs when you instantiate an object with this class
//     function User(name, email, age) {
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         console.log('User created: ' + this.name);
//     }
//     // Method
//     User.prototype.register = function () {
//         console.log(this.name + ' is now registered');
//     };
//     User.prototype.payInvoice = function () {
//         console.log(this.name + 'paid invoice');
//     };
//     return User;
// }());
// // Inheritance
// var Member = /** @class */ (function (_super) {
//     __extends(Member, _super);
//     function Member(id, name, email, age) {
//         var _this =
//         // Grabs info from class User
//         _super.call(this, name, email, age, city, state) || this;
//         _this.id = id;
//         return _this;
//     }
//     Member.prototype.payInvoice = function () {
//         _super.prototype.payInvoice.call(this);
//     };
//     return Member;
// }(User()));
// var john = new User('John Doe', 'johndoe@gmail.com', 45);
// console.log(john.email);
// console.log(john.age);
// john.register();
// var jane = new Member(1, 'Jane Doe', 'janedoe@gmail.com', 44);
// jane.payInvoice();
