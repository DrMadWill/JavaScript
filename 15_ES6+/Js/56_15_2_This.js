// this keyword

let list = {
    category:'phone',
    names: ["Galaxs 2","Xiaomi","IPhone"],
    call:function(){
        //*ES5
        // self=this;
        // this.names.map(function(name){
        //     console.log(self.category + " " + name)
        // })
        //*Now
        this.names.map(name=>{
            console.log(name)
        })

    }
}

//* Map 
// let count = [5,6,4,3,9]
// let sqrtarr = count.map(x=>Math.sqrt(x))
// console.log(sqrtarr)
list.call()

function Game(){
    this.live = 0;
    this.addlive=function(){
        //* ES5
        // var self=this;
        // this.OneUP=setInterval(function(){
        //     console.log(++self.live)
        // },1000)
        //* Now
        this.OneUP=setInterval(()=>{
            console.log(++this.live)
        },1000)
        
    }
}

// let player =new Game();
// player.addlive()
