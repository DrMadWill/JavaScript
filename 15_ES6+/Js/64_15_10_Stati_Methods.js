// Static Method

class Person{

    static SayHi(){
        console.log("Hi Evreyone")
    }
}


class Point{
    
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy)
    }

}

let d = new Point(15,15);
let d1 = new Point(45,45);

console.log(Point.distance(d,d1))
Person.SayHi()