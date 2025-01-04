// Dizideki en büyük sayıyı gösteren fonksiyon:

const biggestNumber = (array) => {
    let res = array[0]; // Değişkene, dizideki ilk elemanı eşitliyoruz.

    for (let i = 0; i < array.length; i++)
    {
        if (res < array[i])
            res = array[i];
    }
    return res;
}
