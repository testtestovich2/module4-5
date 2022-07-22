// Третья задача:

// Напишите функцию, которая принимает строку и возвращает обратную строку
// Пример: "Привет мир" => "рим тевирП"

const reverseStr = (str) => {    
    let newStr = "";     

    for (let i = str.length - 1; i >= 0; i--) {        
        newStr = newStr + str[i];
    }     
    return newStr;
} 

console.log(reverseStr('Привет мир')); 