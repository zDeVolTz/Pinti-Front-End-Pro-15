const array = [5, 1, 5, 2, 3, 4, 5, 6, 5, 7];
//Реализицаия без мутации исходного массива
function removeElement(arr, item) {

    //c помощью filter создаем проверку на передаваемое значение item и содержащимся в массиве 
	//если value не равно значению item значение добавлется в новый массив поскольку возращает true 
	const newArr = arr.filter((value) => value !== item);
    //возращаем новый массив с удаленными елементами
	return newArr;
}

// вызываем функцию и выводим результат в консоль
console.log(removeElement(array, 5));
// Результат: [1, 2, 3, 4, 6, 7]

//Реализицаия с мутаций исходного массива 
function removeElementMut(arr, item) {
    //создаем цикл forEach который выполняется для каждого елемента исходного массива  
	arr.forEach(element=> {
		 //если значение найдено удаляем его методом splice используя текущий индекс исходный массив мутирует ничего не возращаем
		if (element === item) {
			//получаем индекс через метод indexOf c значением текущей итерации
			arr.splice(arr.indexOf(element), 1);
		}
	});
}
removeElementMut(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]