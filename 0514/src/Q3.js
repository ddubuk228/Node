function addContact3(name, phone,
    email = "없음",
    age = 0){
let str =`name>> ${name}
phone>> ${phone}
email>> ${email}
next_age>> ${parseInt(age)+1}`
console.log(str);
    return {name, phone, email, age}
}

let {name:name2, phone:tel, email:contact_email, age:next_age} = addContact3("지수", "010-222-3333", "hera", "100");

console.log('----------------------------')

console.log(`name2>> ${name2}
tel>> SKT ${tel}
contact_email>> ${contact_email}@email.com
next_age>> ${parseInt(next_age)+1}
`)

