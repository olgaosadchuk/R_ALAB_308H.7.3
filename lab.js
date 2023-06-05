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



//////////  Person Class  /////////////////////////////////
class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
      }
}
const person = new Person("Richi");

console.log(person.getName()); 
console.log(person.getAge()); 
console.log(person.getWeight()); 

person.greet(); 

person.eat();
console.log(person.getWeight()); 
console.log(person.mood); 

person.exercise();
console.log(person.getWeight()); 

person.ageUp();
console.log(person.getAge()); 
console.log(person.height);
console.log(person.getWeight()); 
console.log(person.mood); 
console.log(person.bankAccount);