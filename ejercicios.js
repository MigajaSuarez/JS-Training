console.log("prueba de js")

//types of data validator
//'string'	represents textual data
//'number'	an integer or a floating-point number
//'boolean'	Any of two values: true or false
//'undefined'	a data type whose variable is not initialized
//'null'	denotes a null value
//'Object'	key-value pairs of collection of data
//'Array' array of data
function dataTypeValidator (data, expectedType) {
    typeOfData= typeof data;
    if (typeOfData === 'object' && expectedType === 'Array') return  true;
    if (typeOfData === 'object' && expectedType === null) return true;
    if (typeOfData == expectedType) return true;
    return false
}

//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function stringCounter (recivedString= "") {
    if (dataTypeValidator (recivedString, 'string')) {
        let stringLength= recivedString.length;
        console.log("Result from test 1 is:", stringLength);
    } else console.warn(`this data entry "${recivedString}" is invalid for example 1 `)
    
   
}
stringCounter ("Hola Mundo");
// stringCounter (33);
// stringCounter ([1,2,3]);
// stringCounter (null);
// stringCounter ( {sib: 33});
// stringCounter ();

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function stringCutter (recievedString = "", newStringLength = undefined) {
    if (dataTypeValidator (recievedString, 'string')) {
        if (recievedString.length > newStringLength) {
            let stringCutted= recievedString.slice(0,newStringLength);
            console.log("Result from test 2 is:",stringCutted);
        } else console.log("no es posible recortarlo");
    } else console.warn(`this data entry "${recievedString}" is invalid for example 2 `)
}
stringCutter("Hola Mundo",4);


//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function stringCutterBySpace (recievedString ="", spacer ="") {
    if(dataTypeValidator (recievedString, 'string') && dataTypeValidator (spacer, 'string')) {
        let stringCutted= recievedString.split(spacer);
        console.log("Result from test 3 is:",stringCutted);
    } else console.warn(`this data entry "${recievedString}" is invalid for example 3 `)

}
stringCutterBySpace('hola que tal', ' ');


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function stringMultiplier(input = "", reps) {
    if (dataTypeValidator(input, 'string')){
        if (reps === 0 || reps === undefined || !dataTypeValidator(reps, 'number') || reps <= 0) {
            console.warn("is not a vaild number of repetitions");
            return;
        }
        let finalString='';
        for (let i=1; i<=reps; i++) finalString += " "+input;
        console.log("Result from test 4 is:",finalString);
    } else console.warn(`this data entry "${input}" is invalid for example 4 `)
}

stringMultiplier('basdd', 5)

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function stringMirror(input) {
    if(dataTypeValidator(input, 'string')){
        let originalStringArray = input.split('');
        let reversedString = '';
        for(i=input.length-1; i>=0; i--) {
            reversedString+= originalStringArray[i];
        };
        console.log(`the inverted string for exersice 5 is "${reversedString}" `);
    } else console.warn(`this data entry "${input}" is invalid for example 5 `);
}
stringMirror("Hola Mundo");


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function findRepeatredWord(text, searchWord) {
    if(dataTypeValidator(text, 'string')){
        if (!dataTypeValidator(searchWord, 'string')) {
            console.warn("is not a vaild number of repetitions");
            return;
        }
        let originalStringArray = text.split(' ');
        let numberOfRepetitions = 0;
        originalStringArray.forEach((val)=> (val === searchWord) ? numberOfRepetitions++ : numberOfRepetitions);
        console.log(`the number of repetitions of "${searchWord}" in the text is "${numberOfRepetitions}" `);
    } else console.warn(`this data entry "${searchWord}" is invalid for example 7 `);
}
// findRepeatredWord("hola mundo adios mundo perfecto mundo mundo", "mundo")
findRepeatredWord("hola mundo adios mundo", "mundo")


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function palindromChecker(input ="") {
    if(dataTypeValidator (input, 'string')) {
        let stringArray= input.toLocaleLowerCase().split('');
        let reversedStringArray= [];
        stringArray.forEach((val)=>reversedStringArray.unshift(val));
        let result= false
        stringArray.forEach((val,index)=>(val=== reversedStringArray[index]) ? result=true : result=false)
        console.log(`the word "${input}" is${(result)?'': ' NOT'} a palyndrome`);
    } else console.warn(`this data entry "${input}" is invalid for example 7 `);
}

palindromChecker('Salas');
palindromChecker('pepito');

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.