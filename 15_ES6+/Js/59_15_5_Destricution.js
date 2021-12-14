//  ## Destrcuting
//
let a,b
[a,b]=[5,10];

console.log(a+" <:> " + b)

//
let rests
[a,b,...rests]=[1,6,7,8,9,6,9,4,7]

({a,b,...rests}={a:1,b:5, c: 6, d:7, e:8,f:15,t:5})

console.log(a)
console.log(b)
console.log(rests)

//Array
const argConfig=["localhost","3201","900"]

let [server,port,timeout] = argConfig

console.log(server,port,timeout)

//
const appConfig={
    Server : "localhost",
    Port :"3201",
    Timeout:"900"
}   

const {Server,Port,Timeout}=appConfig;
console.log(Server,Port,Timeout) 