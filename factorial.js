// Verilen sayının faktoriyelini almak:

function getFactorial(number)
{
    let factorial = 1; // Çarpam işlemi yaptığımızdan dolayı etkisiz eleman olan 1 sayısına eşitledik.
    for (let i = number; i > 0; i--)
        factorial *= i;
    return factorial;
}
