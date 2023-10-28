const person = {

    city: "Moscow",
    age: 23,
    education: "OSU",
}
function func(str, obj) {
    return (str in obj)
}
console.log(func("age",person))