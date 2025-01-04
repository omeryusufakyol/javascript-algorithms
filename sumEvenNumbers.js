// Verilen dizideki çift sayıları toplayan fonksiyon:

const sumEvenNums = (array) => {

    let sum = 0;
    
    for (let i = 0; i < array.length; i++)
        if ((array[i] % 2) === 0) // Eğer zayıf karşılaştırma yapılacaksa === yerine == kullanılabilir.
            sum += array[i];
    return sum;
}
