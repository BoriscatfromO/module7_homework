const person = {

    city: "Moscow",
    age: 23,
    education: "OSU",
}
function func(obj) {
      for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            console.log (key)
        }
    }
}
console.log(func(person))