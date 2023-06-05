// ////////  Hamster Class  //////////////////////////
// class Hamster{
//     constructor(name){
//         this.owner= "";
//         this.name = name;
//         this.price = 15;
//     }
//     wheelRun(){
//         console.log("squeak squeak");
//     }
//     eatFood(){
//     console.log("nibble nibble");
//     }
//     getPrice(){
//         return this.price;
//     }
// }
// const hamster = new Hamster("Cute");
// console.log(hamster.name); 
// console.log(hamster.owner); 
// console.log(hamster.getPrice()); 

// hamster.wheelRun();
// hamster.eatFood(); 



// //////////  Person Class  /////////////////////////////////
// class Person {
//     constructor(name) {
//         this.name = name;
//         this.age = 0;
//         this.height = 0;
//         this.weight = 0;
//         this.mood = 0;
//         this.hamsters = [];
//         this.bankAccount = 0;
//     }
//     getName() {
//         return this.name;
//     }
//     getAge() {
//         return this.age;
//     }
//     getWeight() {
//         return this.weight;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }
//     eat() {
//         this.weight++;
//         this.mood++;
//     }
//     exercise() {
//         this.weight--;
//     }
//     ageUp() {
//         this.age++;
//         this.height++;
//         this.weight++;
//         this.mood--;
//         this.bankAccount += 10;
//     }
//     buyHamster(hamster) {
//         this.hamsters.push(hamster);
//         this.mood += 10;
//         this.bankAccount -= hamster.getPrice();
//       }
// }
// const person = new Person("Richi");

// console.log(person.getName()); 
// console.log(person.getAge()); 
// console.log(person.getWeight()); 

// person.greet(); 

// person.eat();
// console.log(person.getWeight()); 
// console.log(person.mood); 

// person.exercise();
// console.log(person.getWeight()); 

// person.ageUp();
// console.log(person.getAge()); 
// console.log(person.height);
// console.log(person.getWeight()); 
// console.log(person.mood); 
// console.log(person.bankAccount);



// ///////  Create a Story   /////////
// // Instantiate a new Person named Timmy.
// const timmy = new Person("Timmy");

// // Age Timmy five years.
// for (let i = 0; i < 5; i++) {
//   timmy.ageUp();
// }

// // Have Timmy eat five times to improve his mood.
// for (let i = 0; i < 5; i++) {
//   timmy.eat();
// }

// // Have Timmy exercise five times to shed some weight.
// for (let i = 0; i < 5; i++) {
//   timmy.exercise();
// }

// // Age Timmy 9 more years.
// for (let i = 0; i < 9; i++) {
//   timmy.ageUp();
// }

// // Create a Hamster named "Gus" and set Gus's owner to "Timmy."
// const gus = new Hamster("Gus");
// gus.setOwner(timmy.getName());

// // Have Timmy "buy" Gus.
// timmy.buyHamster(gus);

// // Age Timmy more 15 years.
// for (let i = 0; i < 15; i++) {
//   timmy.ageUp();
// }

// // Have Timmy eat twice.
// for (let i = 0; i < 2; i++) {
//   timmy.eat();
// }

// // Have Timmy exercise twice.
// for (let i = 0; i < 2; i++) {
//   timmy.exercise();
// }


///////////   Chefs Make Dinners   /////////////////////////////////////////
class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  class Chef {
    createDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
  
  const chef = new Chef();
  
  const dinner1 = chef.createDinner("Salad", "Steak", "Cake");
  const dinner2 = chef.createDinner("Pizza", "Chicken", "Ice cream");
  const dinner3 = chef.createDinner("Chicken", "Pasta", "Tiramisu");
  
  console.log(dinner1);
  console.log(dinner2);
  console.log(dinner3);