
//alert("This is an alert");

//var IsPremiumUser = false;
//if(IsPremiumUser == false) {
   // console.log("Thanks for being a loyal")
//}else{
    //console.log("You should subscripbed")
//}

//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.

function multiplyByTen(x) {
    return 10 * x

}

//Ex2
//Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
function myNameIs(NumeleMeu){
    var result = "";
    result += "Numele meu este__" + NumeleMeu
    return result;
}


//Ex3 
//Scrieti o functie care sa transforme un numar in string.
var num = 15;
var n = num.toString();


//Ex4 
//Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
const square = function(x) {
    return x * x;
  }
  
  //Ex5
//Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii
// -numele jobului, compania, in cati ani, si cati bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
//Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.

function aflaViitorul(JobTitle,Company,Years,Money){
    var result = "";
    result += "`Eu voi fi `" + JobTitle + "`la `" + Company + "`in `" + Years + "`si voi face `" + Money + "`pe ora `";
    return result;

}


//1. Scrieti o functie care verifica daca un input este sau nu de tip string. 

function is_String(x2){
    if (typeof x2 == "string") { 
        return true 
    } else { 
        return false; 
    } 
}
    

//2. Scrieti o functie care verifica daca un string este gol sau nu.

function is_Blank(x1){
    if (x1.length === 0)
    return true;
    else;
    return false;

}

//3. Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte


//https://www.w3resource.com/javascript-exercises/javascript-string-exercise-3.php 
function string_to_array(x3){
    return x3.trim().split(" ");

}


//4. Scrieti o functie care transforma un string in forma abreviata

function abbrev_name(x4){
    var split = x4.trim().split(" ");
    if (split.length > 1) {
        return (split[0] + " " + split[1].charAt(0) + ".");
        
    }
    return split[0]
}

//5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare )

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  //6. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:

 
  function remove_character(str, char_pos) 
  {
   part1 = str.substring(0, char_pos);
   part2 = str.substring(char_pos + 1, str.length);
   return (part1 + part2);
  }

  //7. Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:

  function isUpperCaseAt(str, index) {
    return str.charAt(index).toUpperCase() === str.charAt(index);
       }
   

//8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
//https://www.w3resource.com/javascript-exercises/javascript-string-exercise-14.php

insert = function insert(main_string, ins_string, pos) {
    if(typeof(pos) == "undefined") {
     pos = 0;
   }
    if(typeof(ins_string) == "undefined") {
     ins_string = '';
   }
    return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
     }

//9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
//https://www.w3resource.com/javascript-exercises/javascript-string-exercise-26.php

function remove_first_occurrence(str, searchstr)       {
	var index = str.indexOf(searchstr);
	if (index === -1) {
		return str;
	}
	return str.slice(0, index) + str.slice(index + searchstr.length);
}
//trim
function incerc1(a1){
    return a1.trim(4)
}
//slice
function incerc2(a2){
    return a2.slice(3,5)
}


    var q = ["Sintentic","Eminem","Banuti","nuam","cucine"]
    var result = q.length













 
  
  



    




