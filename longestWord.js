// Verilen dizide en uzun kelimeyi bulan fonksiyon:

const longestWord = (array) => {

    if (array.length === 0) return '';
    let longest = array[0];

    for (let i = 1; i < array.length; i++)
    {
        if (array[i].length > longest.length)
        {
            longest = array[i];
        }
    }

    return longest;
}
/* Eğer dizimizi const arr = Array(8); Şeklinde tanımlarsak,
undefined bir değerin length özelliği olmadığı için konsolda hata alırız.
*/

// Bu sorunu çözmek için şu şekilde yazabiliriz:
const longestWordRemastered = (array) => {

    if (array.length === 0) return '';
    
    let longest = '';

    for (let i = 0; i < array.length; i++)
    {
        if (array[i] && typeof(array[i]) === 'string' && array[i].length > longest.length)
        {
            longest = array[i];
        }
    }

    return longest;
}
