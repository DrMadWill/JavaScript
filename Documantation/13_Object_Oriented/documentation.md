# Object Oriented Programming 

## Primitive Type
- Numbers
- String
- Bools
- Null
- Underfined

## Object Type
- Array
- Funcition
- **Primitive** başqa hamsı ....

## (Funcition)Constractor C# daki classlarla eyni anlayşdır.
> Yaradcağımız obeyktlərin qəlibidir.


### Inheritance 
***
> Bir Parent obyektində yaradılacaq obyektlərin əsas xususiyyətlərini yığaraq Child obyektləri ondan törədirik.

### Prototype
***
> Hər bir obyektin `prototype`ı olur və əgər biz hər hası bir obyektin yardılmasında `class`dan istifadə edəriksə bu zaman həmin obyektin xususiyyətlərni kopyalayır ancaq `prototype`dan istfadə edəriksə onda parent obyektin xususiyyətlərindən istfadə edir ancaq özünə kopyalamır bu yaddaşda az yer tutur.
- `prototype` yazılan dəyərlər sabitdir
- Əsasən hər obyektə aid ümümi xususiyyətləri `prototype` da tutulur.


### Object.create()
***
> obyekt yaradarkən `Object.create()` methodundan istifadə edilirərək başaqa obyektdən yardılmasına imkan tanıyır.


### Prototypal Inheritance
***
> Child obyektdə `.cell()` methodundan istifadə edərək Parent obyektin `canstroctor`unu Child obyektə istifadə edə bilərik. Bu **inheitance**dı. Ancaq burada `prototype`lar digərinə göndərilmir.
Burada bizə `Object.create()` methodu köməyimizə gəlir.