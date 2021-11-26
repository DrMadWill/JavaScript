
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
    - >  **_get_** selector daxilindəki informasiyani gətirir. **_set_** method daxilinə yazılan informasiya ilə həmin informasiyanını düzənləyir.
    - `css()`
    - `text()` => _get_,_set_ ->  bütün [mətinləri](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js#L2)
    - `val()` => _get_,_set_ -> [`value`- dəki iformasiyanı](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js#L9) 
    - `attr()` => _get_,_set_ -> [`attribute` daxildəki informasiyani](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js#L32)  
    - `html()` => _get_ _set_ -> [`HTML` təqlərni (mətin şəklində)](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js#L37) 
    - `addClass()` => Selector daxilinə method içərisinə yazılan Class-ı [əlavə edir](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js#L19)
    - `removeClass()` => [Bütün Class-ları silir və ya method daxilinə yazılan clası silir.](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js#L22)
    - `toggleClass()` =>[yazılan Class-lar varsa silir yoxdursa əlvə edir.](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js#L25)
    - `append()` => [method daxilinə yazılan teqləri selector daxilinə əlvə edir.](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js#L28)
- [Code](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js)


```
$(document).ready(function(){
    console.log("ready")
})

və ya

$(function(){
    console.log("ready")
})


```

> yuxarıda yazılan kod ancaq bütün kodları yükləndikdən sonra işləyəcək.

### Click Event
***
> `.click()` methodunun daxilə `click` hasisəsində nə baş verəcəyni yazıırıq.
> Bir `selector` daxilində həmin `selector` ilə əlaqədar iş görmək istədikdə bunu üçün `this` keydən istifadə edilir.
- [Code](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/35_12_5_ClickEvent.js#L2)

### Change Event 
***
> `.change()` bu method vastəsi ilə `selector` daxilindəki dəşiklik olan zaman bu dəşikliyi tutmaq olur.
- [Code](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/36_12_6_Change_Event.js)

### Show/Hide Effects 
> `hide()` `display`-ni `none` edir .
> `show()` `display`-ni əvvəlki vəziyyətniə qaytarır edir 
> `toggle()` `display`-ə `none` əlavə edib çıxarır.
- [Code](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#showhide-effects)

### Fade/Slide Effects
> `fade` methodlarının icrası zamanı `opacity` 0 və 1 arası dəyişərək icra olunur
- `fadeIn()` methodu `opacity`-ni 0 və 1 çevirərək `display`-dəki `none`-ı çıxarır
- `fadeOut()` methodu `opacity`-ni 1 və 0 çevirərək `display`-dəki `none`-ı əlavə edir.
- `fadeToggle()` `fadeIn()`-disə `fadeOut()` edir və əksidə doğrudur.
- `fadeTo()` `opacity`-sini methoda təyin edilən dəyərə gətirmək üçün istifadə edilir.
> `slide` methodları yuxarıdan aşağı və ya aşağıdan yuxarı görünməz hala gəlməsi ilə əlaqədardı.
- `fadeUp()` aşğıdan yuxarı görünməz
- `fadeDown()` yuxarıdan aşağı görünür 
- `fadeToggle()` `fadeUp()`-sa `fadeDown()` icra olunur və ya tərsi.
- [Code](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/38_12_8_Slide_Fade_Effect.js)