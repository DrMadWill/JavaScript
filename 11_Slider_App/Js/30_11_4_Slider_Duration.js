// 
let data = [
    {
        name: 'Acher',
        image: '../Img/bows.jfif',
        link:'https://github.com/DrMadWill'
    },
    {
        name: 'Nenula',
        image: '../Img/Beautiful-Shooting-Star-4K-Wallpaper.jpg',
        link:'https://github.com/DrMadWill'
    },
    {
        name: 'Sky',
        image: '../Img/navigate-using-stars-night-sky-1200x720.jpg',
        link:'https://github.com/DrMadWill'
    },
    {
        name: 'Panter',
        image: '../Img/panter1.jfif',
        link:'https://github.com/DrMadWill'
    },
    {
        name: 'Sword',
        image: '../Img/sword.jpg',
        link:'https://github.com/DrMadWill'
    },
    {
        name: 'Lin Ming',
        image: '../Img/mizrak.jpg',
        link:'https://github.com/DrMadWill'
    }
]

const img = document.querySelector('#cardimg');
const title = document.querySelector('.card-title');
const link = document.querySelector('.card a');

const rightContr = document.querySelector('#right')
const leftContr = document.querySelector('#left')
let internal;
let setting = {
    duration:2000,
    radom:false
}

const controller = document.querySelectorAll('.card-footer .btn')
let val=3;
let dataCount = data.length;

inits(setting)

rightContr.addEventListener('click',function(w){
    val++
    if(val>=dataCount){
        val=0;
    }
    showSilde(val);
})

leftContr.addEventListener('click',function(w){
    val--
    if(val<0){
        val=dataCount-1
    }
    showSilde(val)
})

function showSilde(val){
    img.setAttribute('src',data[val].image);
    title.textContent = data[val].name;
    link.setAttribute('src',data[val].link);
}

controller.forEach(e=>{
    e.addEventListener('mouseenter',m=>{
        clearInterval(internal)
    })
})

controller.forEach(d=>{
    d.addEventListener('mouseleave',function(){
        inits(setting)
    })
})

function inits(setting){
    let prev;

    internal = setInterval(function(){
        if(setting.radom){
            //radom index 
            do{
                val = Math.floor(Math.random() * dataCount)
            }while(val == prev)
            prev = val;
        }else{
            // increasing order index
            ++val
            if(val>=dataCount){
                val=0;
            }
        }
        showSilde(val)

    },setting.duration)


}





