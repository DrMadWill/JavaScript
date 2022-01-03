## Asynchronous Sistem
> Server bir tələbi alana qədər növbəti tələbləri gözlətmir. 

## XHR Object
**Holds the status of the XMLHttpRequest.**
 - 0: request not initialized
 - 1: server connection established
 - 2: request received
 - 3: processing request
 - 4: request finished and response is ready
**Status :**
- 200 => OK
- 403 => Forbidden
- 404 => Not Found

## Promise
> `Callback` funksiyalarin asanlaşdırlımış versiyasıdır. Asinxron olaraq göndərilən məlumati sıralamaq ehtiyacı yaranır. Bu ehtiyacin ödənməsi üçün öncələr `callback` funksiyalarindan istifadə edirdilər sonra `Promise` istifadə etdilər. Parametr göndərərək hadisələri sıralaya bilirik.

## Fetch Api
> Bizi bir XHR obyekti yaratmaqdan bizi xilas edən və  sonda bizə `Promise` obyekti döndürən obyektdir. `fetch()` methodunun daxilinə gödərilən location və data vastəsi ilə ya post ya da get edib nəticələrini `.then()` də yaxalaya bilərik.


