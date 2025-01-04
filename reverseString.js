// Verilen String'i, reverse() methodunu kullanmadan terse çevirmek için fonksiyon:

const reverseString = (str) => {
    let reverseStr = [];

    for (let i = str.length - 1; i >= 0; i--)
        reverseStr.push(str[i]);
    return reverseStr.join('');
}

/* 
Bu Fonksiyon genel olarak doğru çalışacaktır.
Fakat, parametre olarak null veya undefined gibi
geçersiz bir argüman verilirse, fonksiyon hata verebilir. 
Çünkü bu tür değerler üzerinde ".length" gibi özelliklere erişim sağlanamaz.

Veya fonksiyona gönderdiğimiz parametre bir String olmayabilir.
*/

// Eğer bu durumları kontrol altına almak istersek:
const reverseStringRemastered = (str) => {
    if (str === null || str === undefined || typeof(str) !== 'string')
        return null;
    let reverseStr = [];
    for (let i = str.length - 1; i >= 0; i--)
        reverseStr.push(str[i]);
    return reverseStr.join('');
}

/*
push() ve join() kullanmadan + operatörüyle de bu işlem yapılabilir
fakat çalıştığımız string çok uzun ise, + operatörüyle yapmak her seferinde
hem yeni bir string oluşturacağı için, memory'e binen yük artacak
hem de iterasyon sayımız artacağı için performans sorunları yaşayacağız.

Bu sebeplerden dolayı push() kullanmak daha doğru bir kullanım olur.
*/