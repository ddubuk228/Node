function addContact(name, phone,
    home = "없음",
    address= "없음",
    email= "없음",
    ...favoritesFoods
){
    let str = `name >> ${name}
home >> ${home}
address >> ${address}
email >> ${email}
favoritesFoods >> ${favoritesFoods}
-------------------`

    console.log(str)
}

addContact("홍길동", "010-222-3331")
addContact("홍길동", "010-222-3331", "02-3422-9900", "서울시")
addContact("홍길동", "010-222-3331", "02-3422-9900", "서울시", "hero@email.com", "감자", "고구마")

