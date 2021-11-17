// 
data = [
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

let val;

val = 3;

img.setAttribute('src',data[val].image);
title.textContent = data[val].name;
link.setAttribute('src',data[val].link);

