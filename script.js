const array = [1, 2, 3, 4, 5, 6, 5, 7];
//Реализицаия без мутации исходного массива
function removeElement(arr, item) {
    //делаем ShadowCopy передоваемого массива 
	const newArr = [...arr];
    //ищем в клонированом массиве переданое значение item  
	newArr.find((value, index) => {
        //есл значение найдено удаляем его методом splice используя текущий индекс
		if (item === value) {
			newArr.splice(index, 1);
		}
	});
    //возращаем новый массив с удаленными елементами
	return newArr;
}

// вызываем функцию и выводим результат в консоль
console.log(removeElement(array, 5));
// Результат: [1, 2, 3, 4, 6, 7]

//Реализицаия с мутаций исходного массива 
function removeElementMut(arr, item) {
    //ищем в массиве переданое значение item  
	arr.find((value, index) => {
        //если значение найдено удаляем его методом splice используя текущий индекс исходный массив мутирует ничего не возращаем
		if (item === value) {
			arr.splice(index, 1);
		}
	});
}
removeElementMut(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]