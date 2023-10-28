function Electro (name,power,model) {
    this.name=name,
    this.power = power,
        this.model = model,
        this.enabled = false
}

Electro.prototype.Switch= function(){
    console.log (this.name+" is on");
    this.enabled = true;
}
function Computer(name,power,model,year)
{
    this.name=name,
        this.power = power,
        this.model = model,
        this.year = year

}
Computer.prototype= new Electro()
function Lamp (name,power,model,bright)
{
    this.name=name,
        this.power = power,
        this.model = model,
        this.bright = bright
}
Lamp.prototype= new Electro()
Lamp.prototype.timer= function(){
    console.log (this.name+"is off 30 sec");
    this.enabled=false;
}

//const computer = new Electro("computer",220,"apple");
//const lamp = new Electro("lamp",110,"alica");
const phone = new Electro("phone",20,"redmi");

const mac = new Computer("computer", 220, "apple",2021)
const hoff= new Lamp ("lamp", 110, "AW-3000", "100%")
//console.log(hoff)
//mac.Switch()

Electro.prototype.getPower=function ()
{
   return this.enabled ? this.power : 0;
}
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