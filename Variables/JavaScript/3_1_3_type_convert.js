
// >> Trype Convert 
    

    // -> String Convert Number
    let string_number_1="25"
    let string_number_2="20"
    console.log("string_number_1 type >> ",typeof string_number_1,"// string_number_1 >> ",string_number_1);
    console.log("string_number_2 type >> ",typeof string_number_2,"// string_number_2 >> ",string_number_2);

    let number_1=Number(string_number_1);
    let number_2=Number(string_number_2);
    console.log("number_1 type >> ",typeof number_1,"// number_1 >> ",number_1);
    console.log("number_2 type >> ",typeof number_2,"// number_1 >> ",number_2);




    // -> Bool Convert String
    let bool_1=true;
    console.log("bool_1 type >> ",typeof bool_1,"// bool_1 >> ",bool_1);

    let string_bool=String(bool_1);
    console.log("string_bool type >> ",typeof string_bool,"// string_bool >> ",string_bool);





    // -> Bool Convert String
    let bool_2=true;
    console.log("bool_2 type >> ",typeof bool_2,"// bool_2 >> ",bool_2);

    let number_bool=Number(bool_1);
    console.log("number_bool type >> ",typeof number_bool,"// number_bool >> ",number_bool);




    // -> Object Convert String
    let variable_object=new Date();
    console.log("variable_object type >> ",typeof variable_object,"// variable_object >> ",variable_object);

    let string_object=String(variable_object);
    console.log("string_object type >> ",typeof string_object,"// string_object >> ",string_object);

    let number_object=Number(variable_object);
    console.log("number_object type >> ",typeof number_object,"// number_object >> ",number_object);







