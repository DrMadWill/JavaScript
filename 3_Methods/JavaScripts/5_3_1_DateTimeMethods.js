// Date Object
    let date = new Date('12/07/23');

    // Set Methods bu metdolar vastesi ile time istenilen vaxta cekmek mukundur

        date.setHours(12)
        date.setMonth(7)


    // Get Methods
        console.log(date);

        // gun
        console.log("getDate() - gun - >> ",date.getDate());

        // hefte gunleri sifirdan baslayaraq
        console.log("getDay() - hefte gunleri sifirdan baslayaraq - >> ",date.getDay());

        // ill
        console.log("getFullYear() - ill - >> ",date.getFullYear());

        // saat
        console.log("getHours() - saat - >> ",date.getHours());

        // ay
        console.log("getMonth() - ay - >> ",date.getMonth());

        // ay
        console.log("getMonth() - ay - >> ",date.getMinutes());



    //uygulama

    let dtA=new Date('1/1/1990');

    
    let getOfDate=dtA.getDate();

    dtA.setDate(getOfDate-1)

    console.log(dtA)



    let birthDay=new Date().getFullYear()-dtA.getFullYear();

    console.log(birthDay)






