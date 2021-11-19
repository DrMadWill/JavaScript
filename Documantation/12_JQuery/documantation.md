
## My Documantation
### Referance
***
- JQuery veb səyfədə iki cür istifadə edə bilərik.
    - [Dowload content use Local link](https://github.com/DrMadWill/JavaScript/blob/d80c8fa544c8a683a63aca03985ea396ce11af87/12_JQery/31_12_1_JQuery_Referance.html#L16)
    - [Global Link](https://github.com/DrMadWill/JavaScript/blob/d80c8fa544c8a683a63aca03985ea396ce11af87/12_JQery/31_12_1_JQuery_Referance.html#L19) 
- [Code](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/31_12_1_JQuery_Referance.html#L16)
### Selectors
***
> `$("")` daxilinə css selcetorlarnini yaza bilərik.
- Element birdən çox olsa listə yığılır.
- [Code](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/32_12_2_Selectors.html#L26)
### Styling Content
*** 
> `selectors.css("property","value")` və ya ` let a={width:25px,height:25px}  selectors.css(a)`  bu şəkildə təyin edilmiş valueya style əlavə edirik
- [Code](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/33_12_3_Styling_Content.html#L25)
### Methods
***

- Mostly Use Methods:
    - >  _get_ selector daxilindəki informasiyani gətirir. _set_ method daxilinə yazılan informasiya ilə həmin informasiyanını düzənləyir.
    - `css()`
    - `text()` => _get_,_set_ ->  bütün mətinləri 
    - `val()` => _get_,_set_ -> `value`- dəki iformasiyanı 
    - `attr()` => _get_,_set_ -> `attribute` daxildəki informasiyani  
    - `html()` => _get_ _set_ -> `HTML` təqlərni (mətin şəklində) 
    - `addClass()` => Selector daxilinə method içərisinə yazılan Class-ı əlavə edir
    - `removeClass()` => Bütün Class-ları silir və ya method daxilinə yazılan clası silir.
    - `toggleClass()` => yazılan Class-lar varsa silir yoxdursa əlvə edir.
    - `append()` => method daxilin' yazılan teqləri selector daxilinə əlvə edir.