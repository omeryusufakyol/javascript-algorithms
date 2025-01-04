// Dizideki tekrar eden elemanı bulan fonksiyon:


// Bu fonksiyon dizide tekrar eden ilk elemanı döndürüyor.
const repeatingNums = (array) => {

    for (let i = 0; i < array.length; i++)
    {
        for (let j = i + 1; j < array.length; j++)
        {
            if (array[i] === array[j])
                return array[i];
        }
    }
    
    return null
}

// Eğer tekrar eden elemanların hepsini almak istiyorsak:
const allRepeatings = (array) => {
    
    const duplicates = []; // Tekrar eden elemanları saklayacağımız dizi.

    for (let i = 0; i < array.length; i++)
    {
        for (let j = i + 1; j < array.length; j++)
        {
            if (array[i] === array[j])
            {
                // Daha önce eklenmemişse duplicates dizisine ekle.
                if (!duplicates.includes(array[i]))
                    duplicates.push(array[i]);
                break; // Aynı elemanı birden fazla kez kontrol etmemek için döngüyü kır.
            }
        }
    }
    return duplicates;
}
