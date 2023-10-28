class Electro {
    constructor(name, power, model) {
        this.name = name;
            this.power = power;
            this.model = model;
            this.enabled = false;
    }
     Switch () {
        console.log(this.name + " is on");
        this.enabled = true;
    }
    getPower () {
     return this.enabled ? this.power : 0;

    }
}

class Computer extends Electro {
constructor(year, name, power, model) {
    super (name, power, model);
    //this.name = name;
    //this.power = power;
    //this.model = model;
    this.year = year;
    }
}
class Lamp extends Electro {
constructor(bright,name,power,model)
{
    super (name,power,model);
    //this.name=name;
       // this.power = power;
       // this.model = model;
        this.bright = bright;
}
 timer(){
    console.log (this.name+"is off 30 sec");
    this.enabled=false;
}
}

const phone = new Electro("phone",20,"redmi");
const mac = new Computer(2021, "apple",220,"computer")
const hoff= new Lamp (100,"lamp", 110, "AW-3000")

function sum (arr) {
    let result=0
    arr.forEach((item)=> {
        result += item.getPower()
    })
    return result;
}
mac.Switch();
hoff.Switch();
phone.Switch();
console.log(sum ([mac,hoff,phone]))