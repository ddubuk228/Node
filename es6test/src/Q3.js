function addContact3(name, phone
    , email= "없음"
    , next_age=0){
        let str = `name>> ${name}
phone>> ${phone}
email>> ${email}
next_age>> ${next_age+1}
-----------------`
console.log(str);
}

let {name2, tel, contact_email, next_age} = addContact3("지수", "010-222-3333", "hera", 100);


