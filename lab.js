////////  Hamster Class  //////////////////////////
class Hamster{
    constructor(name){
        this.owner= "";
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log("squeak squeak");
    }
    eatFood(){
    console.log("nibble nibble");
    }
    getPrice(){
        return this.price;
    }
}
const hamster = new Hamster("Cute");
console.log(hamster.name); 
console.log(hamster.owner); 
console.log(hamster.getPrice()); 

hamster.wheelRun();
hamster.eatFood(); 