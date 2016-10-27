// //literal object
// var food = {
//     edible: true,
// }
// food.edible = true
// var pizza = Object.create(food) //how to clone a function in a literal sense.
// pizza.edible = false
// console.log(pizza)
// console.log(food)
// //New object
// var food = new Object()
// food.edible = true
//
// //constructor function (capitalize the variable word so we vusially recognize that it's a contructor function)
// var Food = function() {
//     this.edible = true //this allows use to create a new object by chaining on the the name of it afterwards
//     this.totalEaten = 0
//     this.eat = function() {
//         this.totalEaten++
//         console.log('now eating ' + this.type + ' 1 of ' + this.totalEaten)
//     }
// }
// //variable pizza is an instance of its master template (Food).
// var pizza1 = new Food()
// pizza1.type = 'Taco Pizza'
// var pizza2 = new Food()
// pizza2.type = 'Margerita Pizza'
// console.log(pizza1)
// console.log(pizza2)
//
// Food.prototype.calories = 1200 //retroactively changed the master object, Food.
//
// //Zee new way...Constructor Functions (this and class are keywords)
// class Vehicle {
//     constructor(make, model) {
//         this.make = make
//         this.model = model
//         this.year
//         //below is a hack (especially the keyword this needs to be bind)
//         this.setYear = this.setYear.bind(this)
//
//     }
//     setYear(year){ //use this moethod to transform data. so you don't hard code values for properties
//         this.year = 'year '+ year
//     }
//     drive(speed){
//         console.log(`${make} ${model} is driving ${speed}mph.`)
//     }
// }
// // var $4Runner = new Toyota(' 4Runner')
// // //$4Runner.setYear(2006)
// // $4Runner.year = 2006
// // //console.log($4Runner)
// // //copy everything in the master template
// class Toyota extends Vehicle {
//     constructor(model) { //constructor is a magical function that runs in the beginning when being made
//         super('Toyota', model) //always have to do this if it's an extended class
//         this.make = 'Toyota'
//     }
// }
// var $4Runner = new Toyota(' 4Runner')
// //$4Runner.setYear(2006)
// $4Runner.year = '2006'
// console.log($4Runner)
//
// var $prius = new Toyota ('Prius')
// $prius.year = '2008'
// console.log($prius)
//
// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//
//     }
// }
// var human = new Person( 'Jeff', '26')
// console.log(human)
// class Athlete extends Person {
//     constructor(sport, team){
//         super('Jeff', '26')
//         this.sport = sport
//         this.team = team
//         this.bestSkill = this.setSkill.bind(this)
//
//     }
//     setSkill(bestSkill){
//         this.bestSkill = bestSkill
//     }
// }
// var athlete = new Athlete('baseball', 'Cubs')
// athlete.setSkill('bench warming')
// //console.log(athlete)
//
// class BaseballPlayer extends Athlete {
//     constructor(throwingHand, position){
//         super('baseball', 'Cubs')
//         this.throwingHand = throwingHand
//         this.position = position
//         this.batHand = this.batHand.bind(this)
//         this.nickName = this.nickName.bind(this)
//     }
//     batHand(hitting) {
//         this.hitting = hitting
//     }
//     nickName(nickname){
//         this.nickname = nickname
//     }
// }
//
// var allStar = new BaseballPlayer('left-handed', 'catcher')
// allStar.setSkill('bench warming')
// allStar.batHand('switch hitter')
// allStar.nickName('Top Gun')
// console.log(allStar)





//Person name & height
//athlete college graduation, team
//baseball player battingAvg, handPref

class Person {
    constructor(name, height) {
        this.name = name
        this.height = height
    }
}
var troy = new Person('Troy', '6\'0')
//console.log(troy)

class Athlete extends Person {
    constructor(collegeGrad, team){
        super('troy', '6.0')
        this.collegeGrad = collegeGrad
        this.team = team
        this.howFast = this.howFast.bind(this)
    }
    howFast(fast){
    this.fast = fast
}
}
var jeff = new Athlete('2012', 'Cubs')
jeff.howFast('4.3')
//console.log(jeff)

class
