//object literal spaceship Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser. Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'.
var spaceship1 = {
    shipName: 'Galaxy Cruiser',
    topSpeed: ' lyph',
    takeOff: function(speed){
        console.log(this.shipName + ' launching to infinity & beyond at '+ speed + this.topSpeed+ '!')
    }
}
spaceship1.takeOff(55)


//object new spaceship Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser. Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'.
var spaceship2 = new Object()
spaceship2.name = 'Galaxy Cruiser'
spaceship2.speedType = ' lyph'
spaceship2.drive = function(speed) {
    console.log(this.name + ' launching to infinity & beyond at ' + speed +this.speedType + '!')
}
spaceship2.drive(21)



//constructor function spaceship Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser. Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'.
var Spaceship3 = function(){
    this.name = 'Galaxy Cruiser'
    this.speedType = ' lyph'
    this.drive = function(speed){
        console.log(this.name + ' launching to infinity & beyond at ' + speed +this.speedType + '!')
    }
}
var newSpaceship3 = new Spaceship3()
newSpaceship3.drive(34)




//class spaceship Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser. Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'.
class Spaceship {
    constructor(shipName, topSpeed) {
        this.shipName = shipName
        this.topSpeed = topSpeed
         this.launchCode = this.launchCode.bind(this)
    }
    launchCode(speed){
        console.log(`Galaxy Cruiser launching to infinity & beyond at ${speed} lyph!`)

    }
}
 var launch = new Spaceship('Galaxy Cruiser', '2lyph')
 launch.launchCode(14)
