var a = 10; 

var b = a + 20;
console.log(b)

let obj1 = {
    name: " pramod",
    age : 23
}
let obj2 ={
    name : "pp",
    age: 24
}

obj2 = obj1
obj1.age = 14
console.log(obj1,obj2)

let arr = [1,2,3,4]
let arr1 = [1,2,3]
arr1.push(4)
console.log(arr,arr1)