// Verilen dizinin elemanlarını toplayan fonksiyon:

const sumFunc = (array) => {

	let sum = 0;

	for (let i = 0; i < array.length; i++)
		sum += array[i];
	
	return sum;
}
