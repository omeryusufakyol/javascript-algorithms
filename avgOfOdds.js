// Tek sayıların ortalamasını alan fonksiyon:

function averageOfOdds(numbers)
{
    let sum = 0;
    let count = 0; // Tek sayı sayacı

    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] % 2 !== 0) // Eğer tek sayıysa
        {
            sum += numbers[i]; // Topla
            count++; // Tek sayı sayacını artır
        }
    }

    // Eğer tek sayı yoksa, "NaN" döndürmek yerine 0 döndürelim.
    return count === 0 ? 0 : sum / count;
}
