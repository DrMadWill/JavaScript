# Learning JavaScript
## My JavaScript App <a href="https://drmadwill.github.io/JavaScript/" target="blank"> <img src="https://i.postimg.cc/6Q7k4DHr/app.png" width="100" align="right" ></a>
***
## To Do App <a href="https://codepen.io/Dr-MadWill/pen/eYEoZPe" target="blank"> <img src="https://i.postimg.cc/c4SZwbWw/list.png" width="180" align="right" ></a>
> Bu **app**-də listə itemləri əlavə edə bilirik və tək-tək və ya hamsı silə bilirik. Yazılan _data_-lar `localStorage`-ə yazılır. Yəni browser söndürülmədiyi müdətdə _data_-lar saxlanır, _reload_ edilsə belə.
- [Preview](https://codepen.io/Dr-MadWill/pen/eYEoZPe)
- [Code Documatation](https://github.com/DrMadWill/JavaScript#todo-list-app)
- **App**-in əsas xususiyyətləri:
    - `localStorage` istifadə 
    - _RemoveElement_-dən isfadə
    - _AddElement_-dən istfadə
## Slider App <a href="https://codepen.io/Dr-MadWill/pen/QWMPErQ?editors=0010" target="blank"> <img src="https://i.postimg.cc/2yWNp4fs/slid.png" width="180" align="right" ></a>
> Sadəcə _JavaScript_-dən istfadə edərək sadə _Slider_ yazmağa çalışdım.Burda _data_ olaraq  göstərilən [`data`](https://github.com/DrMadWill/JavaScript/blob/main/11_Slider_App/Js/30_11_4_Slider_Duration.js#L2) obyecti _DataBases_-dən gələn məlumatları göstərir._Slider_-da default olaraq rəsimləri ardıcıl göstərir. Tələbdən aslı olarq [_random_ etmək](https://github.com/DrMadWill/JavaScript/blob/main/11_Slider_App/Js/30_11_4_Slider_Duration.js#L44) olar. _Controller_-lərin üzərinə gələn zaman [_Slider_ dayanır](https://github.com/DrMadWill/JavaScript/blob/main/11_Slider_App/Js/30_11_4_Slider_Duration.js#L53).   
- [Preview](https://codepen.io/Dr-MadWill/pen/QWMPErQ?editors=0010)
- [Code Documatation](https://github.com/DrMadWill/JavaScript#slider-app-1)
- **App**-in əsas xususiyyətləri:
    - `setInterval`-dan istfadə edilib.
    - `clearInterval`-dan istfadə edilib.
    - _radom_ xususiyyəti əlavə edib.
## Form Validation App <a href="https://codepen.io/Dr-MadWill/pen/MWEYBGg" target="blank"> <img src="https://i.postimg.cc/dVh6TpqG/validation-modified.png" width="180" align="right" ></a>
> Validation çox zaman hazır kod blokları və ya  _Packages_-dən istifadə edilir. Burada məqsəd hazır kod bloklarında istifadə etmədən öz şərtlərmizi qoyaraq bu hadisəni necə sadə yolla həyata keçrə biləcəyimizi yazmaqdır.
- [Preveiw](https://codepen.io/Dr-MadWill/pen/MWEYBGg)
- [Code Documatation](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/42_12_11_Form_Validation.html)
- **App**-ın əsas xususiyyətləri:
    - _JQuery_-dən istifadə edilib.

## Back To Top App <a href="https://codepen.io/Dr-MadWill/pen/eYGmLmz" target="_blank"> <img src="https://i.postimg.cc/LsnnLxVP/back-to-top-arrow-sign-icon-scroll-up-symbol-vector-4029487-modified.png" width="180" align="right" ></a>
> _JQuery_ istifadə edərək sadə **Back To Top App** gəliştirməyə çalişdim.
- [Preveiw](https://codepen.io/Dr-MadWill/pen/eYGmLmz)
- [Code Documatation](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/41_12_11_Back_To_top.html)

## Inheritance Usage
> `prototype`,`Object.create()` və `.call()` istifadə edərək **inheritance** ifadə etməyə çalışdım.
- [Code Documantation](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/47_13_5_InheritanceUsage.js)

## Quiz App <a href="https://codepen.io/Dr-MadWill/pen/GRMqNJQ"> <img src="https://i.postimg.cc/0ysTWs51/adsda-modified.png" width="180" align="right" ></a>
> Sualları `card`ın içərisiniə yerləşdirərək, cavabları butonlar şəkildə götərirk cavbalar doğru olduqda siz bir xal əldə etmiş olursuz. Hazırlamış saulları [`Question Load`](https://github.com/DrMadWill/JavaScript/blob/main/14_Quiz_App/Js/app.js#L26) bölmesində yükləyərək ordan əldə etmiyiz iformasiyanı `html` əks etirdik.
- [Preveiw](https://codepen.io/Dr-MadWill/pen/GRMqNJQ)
- [Code Documantation](https://github.com/DrMadWill/JavaScript/tree/main/14_Quiz_App)
- **App Usage** 
    - İlk olaraq sualları qeyd edərəkən sualları [qeyd edəcəmiyimiz dəyişənləri əvvəlcədən qeyd](https://github.com/DrMadWill/JavaScript/blob/main/14_Quiz_App/Js/app.js#L27) edirik.
    - Qeyd etdiyimiz dəyişəni `try` blokunun [icərisinə yazırıq](https://github.com/DrMadWill/JavaScript/blob/main/14_Quiz_App/Js/app.js#L29) `Question()` konstraktorunu dolduruq
    - `Question()` konstraktorunu Doldurulma qaydası 
        - `Question("Question", ["Choice", "Choice", "Choice"], "Answer")`
    - Son olraq bütün dəyişənləri [**Array**](https://github.com/DrMadWill/JavaScript/blob/main/14_Quiz_App/Js/app.js#L37)ın içərisinə toplayırıq

- **App**-ın əsas xususiyyətləri:
    - `score` bölmesi vastəsi ilə sonda cavablaya bildiymiz sualları neticəsni götərilir.
    - _JQuery_-dən istifadə edilib.

## Fayl strukturunun izahi
***
- a_b_c_fayl.js
    - _a_ ümumi sıra
    - _b_ ders başlığının sırası
    - _c_ Dersin sırası

##  My Research in JavaScript 
### Variables
***
- [Variables](https://github.com/DrMadWill/JavaScript/blob/main/1_Variables/JavaScript/1_1_1_variable_script.js)
- [Datatype](https://github.com/DrMadWill/JavaScript/blob/main/1_Variables/JavaScript/2_1_2_datatype.js)
- [Type Convert](https://github.com/DrMadWill/JavaScript/blob/main/1_Variables/JavaScript/3_1_3_type_convert.js)
### Operators
***
- [Operators](https://github.com/DrMadWill/JavaScript/blob/main/2_Operators/JavaScripts/4_2_1_operators.js)
### Methods
***
- [Date&Time Method](https://github.com/DrMadWill/JavaScript/blob/main/3_Methods/JavaScripts/5_3_1_DateTimeMethods.js)
- [Numbers Methods](https://github.com/DrMadWill/JavaScript/blob/main/3_Methods/JavaScripts/6_3_2_Number.js)
- [String Methods](https://github.com/DrMadWill/JavaScript/blob/main/3_Methods/JavaScripts/7_3_3_String.js)
### Array
***
- [Array](https://github.com/DrMadWill/JavaScript/blob/main/5_Conditional_expression/JavaScripts/9_5_1_Conditional_expression.js)
### Conditional expression
***
- [Conditional expression](https://github.com/DrMadWill/JavaScript/blob/main/5_Conditional_expression/JavaScripts/9_5_1_Conditional_expression.js)
### Function
***
- [Function](https://github.com/DrMadWill/JavaScript/blob/main/6_Function/JavaScripts/10_6_1_Funciton.js)
- [Window Object](https://github.com/DrMadWill/JavaScript/blob/main/6_Function/JavaScripts/11_6_2_WindowObj.js)
- [Scops](https://github.com/DrMadWill/JavaScript/blob/main/6_Function/JavaScripts/12_6_3_Scops.js)
### Dom
***
- [Document Object Model](https://github.com/DrMadWill/JavaScript/blob/main/7_Dom/JavaScripts/13_7_1_Dom.js)
- [Selecting Single Elements](https://github.com/DrMadWill/JavaScript/blob/main/7_Dom/JavaScripts/14_7_2_Selcet_Single.js)
- [Selecting Multiple Elements](https://github.com/DrMadWill/JavaScript/blob/main/7_Dom/JavaScripts/15_7_3_Select_Multiple_elemnt.js)
- [Traversing the Dom](https://github.com/DrMadWill/JavaScript/blob/main/7_Dom/JavaScripts/16_7_4_Traversing_the_Dom.js)
- [Create Element](https://github.com/DrMadWill/JavaScript/blob/main/7_Dom/JavaScripts/17_7_5_Creating_Element.js)
- [Remove Element](https://github.com/DrMadWill/JavaScript/blob/main/7_Dom/JavaScripts/18_7_6_Remove_Elements.js)
### Event 
***
- [Event Listeners](https://github.com/DrMadWill/JavaScript/blob/main/8_Events/JavaScripts/19_8_1_EventListeners.js)
- [Mouse Events](https://github.com/DrMadWill/JavaScript/blob/main/8_Events/JavaScripts/20_8_2_Move_Event.js)
- [Keyboard Events](https://github.com/DrMadWill/JavaScript/blob/main/8_Events/JavaScripts/21_8_3_Keyboard_Event.js)
- [Event Bubbling and Capturing](https://github.com/DrMadWill/JavaScript/blob/main/8_Events/JavaScripts/21_8_4_Event_Bubnling.js)
### Local & Session Storage
***
- [Local Storage](https://github.com/DrMadWill/JavaScript/blob/main/9_Local_and_Session_Storage/JavaScripts/22_9_1_Local_and_Session_Storage.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/9_Local_and_Session_Storage/documat.md)
### ToDo List App
***
- [Create App Body](https://github.com/DrMadWill/JavaScript/blob/main/10_ToDo_app/10_1_Create_App/index.html)
- [Add Item](https://github.com/DrMadWill/JavaScript/blob/main/10_ToDo_app/10_2_Add_List/23_9_2_Add_List.js)
- [Delete Item](https://github.com/DrMadWill/JavaScript/blob/main/10_ToDo_app/10_3_Delet_item/24_10_4_delet_item.js)
- [Load Item](https://github.com/DrMadWill/JavaScript/blob/main/10_ToDo_app/10_4_LoadElement/25_10_5_delet_item.js)
- [Using Storage](https://github.com/DrMadWill/JavaScript/blob/main/10_ToDo_app/10_4_LoadElement/25_10_5_delet_item.js)
### Slider App
***
- [Creating App Body](https://github.com/DrMadWill/JavaScript/blob/main/11_Slider_App/HTML/index.html)
- [Data Loading](https://github.com/DrMadWill/JavaScript/blob/main/11_Slider_App/Js/28_11_2_Image_Loading.js)
- [Slider Controller](https://github.com/DrMadWill/JavaScript/blob/main/11_Slider_App/Js/29_11_3_Slider_Controller.js)
- [Slider Duration](https://github.com/DrMadWill/JavaScript/blob/main/11_Slider_App/Js/30_11_4_Slider_Duration.js)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/11_Slider_App/Silder_App.md)

### JQuery
***
- [Referance Link](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/31_12_1_JQuery_Referance.html)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#referance)
- [Selectors](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/32_12_2_Selectors.html)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#selectors)
- [Styling Content](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/33_12_3_Styling_Content.html#L25)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#styling-content)
- [Methods](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/34_12_4_Method.js)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#methods)
- [Click Evevt](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/35_12_5_ClickEvent.js#L2)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#click-event)
- [Change Event](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/36_12_6_Change_Event.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#change-event)
- [Show/Hide Effects](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/37_12_7_Show_Hide_Effect.js#L2)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#showhide-effects)
- [Slide/Fade Effects](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/38_12_8_Slide_Fade_Effect.js)
    - [My Documentation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#fadeslide-effects)
- [Animate](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/39_12_9_Aimate.html#L33)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/12_JQuery/documantation.md#animate)
- [Messange Box App](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/40_12_10_MessageBox.html#L47)
- [Back To Top App](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/41_12_11_Back_To_top.html#L246)
- [Form Validation](https://github.com/DrMadWill/JavaScript/blob/main/12_JQery/42_12_11_Form_Validation.html)

### Object Oriented Programming
***
- [Object and Constroctor](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/43_13_1_Object.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/13_Object_Oriented/documentation.md#object-oriented-programming)
- [Inheritance](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/43_13_1_Object.js#L64)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/13_Object_Oriented/documentation.md#inheritance)
- [Object Create](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/44_13_2_Create_Object.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/13_Object_Oriented/documentation.md#objectcreate)
- [ProtoTypal Inheritance](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/45_13_3_ProtoTypalConstroct.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/13_Object_Oriented/documentation.md#prototypal-inheritance)
- [Bult-in Constructor](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/46_13_4_BultinConstroctor.js)
- [Inheritance Usage](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/47_13_5_InheritanceUsage.js)
- [CallBack Function](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/48_13_6_CallBack_Function.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/13_Object_Oriented/documentation.md#callback-function)
- [Immediate Function](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/49_13_7_ImmediateFunction.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/13_Object_Oriented/documentation.md#immediate-function)
- [Function that return function](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/50_13_8_Function_return_Function.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/13_Object_Oriented/documentation.md#function-that-return-function)
- [Setter Getter](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/51_13_9_Setter_Getter.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/13_Object_Oriented/documentation.md#encapsulation)
- [Call,Apply and Bind Function](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/52_13_10_Call_Applay_Bind_Funciio.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/13_Object_Oriented/documentation.md#call-apply-and-bind-function)
- [Error Handling](https://github.com/DrMadWill/JavaScript/blob/main/13_Object_Oriented_Programming/Js/53_13_11_Error_Handling.js)

### Quiz App
***
- [Quiz App](https://github.com/DrMadWill/JavaScript/tree/main/14_Quiz_App)


### ES6+
***
- [Arrow Function and Map Method](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/55_15_1_ArrowFunc.js#L1)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/tree/main/Documantation/15_ES%2B#map-function)
- [`this` keyword](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/56_15_2_This.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/tree/main/Documantation/15_ES%2B#this-keyword)
- [Spread Operator](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/57_15_3_SparedOper.js)
    - [My Documantation](https://github.com/DrMadWill/JavaScript/tree/main/Documantation/15_ES%2B#spread-operator)
- [Reset Parametrs](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/58_15_4_ResetParametrs.js)
- [Destrcuting](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/59_15_5_Destricution.js#L1)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/tree/main/Documantation/15_ES%2B#destrcuting)
- [Array.from() Using](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/60_15_6_NewUsingArray.js)
- [Map Object](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/61_15_7_Map.js)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/tree/main/Documantation/15_ES%2B#map-object)
- [Set Uniq Value Collection](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/62_15_8_Set_UniqCollection.js)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/tree/main/Documantation/15_ES%2B#set-objectcollection)
- [Class](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/63_15_9_Class.js)
- [Static](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/64_15_10_Stati_Methods.js)
- [Sub Classes](https://github.com/DrMadWill/JavaScript/blob/main/15_ES6%2B/Js/65_15_11_SubClass.js)

### ES6+
***
- [Asynchronous](https://github.com/DrMadWill/JavaScript/blob/main/16_Ajax_Restful_Api/Js/67_16_1_Asinxron.js)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/16_Asynchronous/documantation.md#asinxiron-sistem)
- [XHR Object](https://github.com/DrMadWill/JavaScript/blob/main/16_Ajax_Restful_Api/Js/68_16_2_AJAX.js)
    - [My Documatation](https://github.com/DrMadWill/JavaScript/blob/main/Documantation/16_Asynchronous/documantation.md#xhr-object)
- [Create JSON](https://github.com/DrMadWill/JavaScript/blob/main/16_Ajax_Restful_Api/HTML/employness.json)
- [Use JSON](https://github.com/DrMadWill/JavaScript/blob/main/16_Ajax_Restful_Api/Js/69_16_3_Use_JSON.js)
- [HTTP GET]()