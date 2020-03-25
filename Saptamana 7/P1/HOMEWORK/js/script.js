

//() -> appel
// || -> sau


//1.Scrieti o functie de tip named function denumita greatestNrBetween care:
//- Primeste ca argumente doua numere
//- Returneaza numarul care este mai mare
//  Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“

function greatestnrBetween(param1,param2){
   if(param1>param2){
       console.log("Numarul mai mare dintre 5 si 10 este" + param1);
   }
   else {
       console.log("Numarul mai mare dintre 5 si 10 este" + param2)
   }
      
       
       return greatestnrBetween(5,10);
   }


   
//2. Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
//- Primeste ca argument codul unei limbi: “en”, “es”, “de”
//- Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
//- Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
//Apelati functia pentru fiecare caz in parte


var helloWorldInLang = function(en,es,de){
    if(en){
        console.log("Hello World")
    }
    else if(es){
        console.log("Buenos Dias")
    }
    else(de) 
        console.log("Hello WOrld in Germana")
    }
    return helloWorldInLang(en)
   
// Ce am facut eu aici singur e un cacat


//3. Scrieti o functie numita pluralizeWord care:
//- accepta doua argumente: un substantiv in engleza si un numar
//- returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
//- adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 


function pluralizeWord(substantiv,numar){
    
}


function checkIfColorIsGreenOrWhite(color) {
	// daca color este "green"
  // afiseaza "Culoarea este verde."
  // altfel
  // afiseaza "Culoarea NU este verde !"

	if(color === "green" /* || color === "white" */) {
  	console.log("Culoarea este corecta.");
  }  else if(color === "white") {
    console.log("Culoarea este corecta.");
  } else {
  	console.log("Culoarea NU este corecta.");
  }
}

/* checkIfColorIsGreenOrWhite("red"); */

function checkColor (color) {
	switch(color) {
  	case "green": 
    	console.log("Culoarea este verde.");
      break;
    case "red": 
    	console.log("Culoarea este rosu.");
      break;
    case "yellow":
    	console.log("Culoarea este galben");
      break;
    default:
    	console.log("Culoarea nu este in lista.");
  }
}

checkColor("green");




//1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
//raporta acest lucru in consola. (exemplu: “2 este numar par”);
//Scrieti functia in doua variante: while si for

//--------V1
function salut(){
  for(var i = 0; i <= 20; i=i+1){
    if(i % 2 == 0){
      console.log("Numarul " + i + " este par");
    }
    else {
      console.log(("Numarul " + i + " este impar")
);
    }
  }
}
salut();

//-------V2
function salut2(){
  var i = 0;
  while(i <= 20){
    i++
    if(i % 2 === 0){
      console.log("Numarul " + i + " este par");
    }
    else{
      console.log("Numarul " + i + " este impar")
    }
  }
}
salut2();

//2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
//rezultatul. (exemplu: “3*9=27”).
 //Scrieti functia in doua variante: while si for

 //----------V1

 function salut3() {
  for (var i = 0; i <= 10; i = i + 1) {
     
      console.log(i*3 + "=" + i + "*3");
   
    }
  }

salut3();

//----------V2

function salut4(){
  var i = 0;
  while(i<=9){
    i++
    console.log(i*3 + "=" + i + "*3")
  }
}
salut4();

//3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
//(exemplu: 1 * 0 = 0
 //1 * 1 = 1
// …
// 1 * 10 = 10 )
//Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.

function salut5(){
  for (var i = 0; i<=9;i=i+1){
    console.log(i*1+1 + "=" + (i*1+1 + "*1"))
  }
}
salut5();

//4.Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
//poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
//calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
//dezvoltate la tema anterioara ! 
//Nu am facut cealalta tema sorry!






//function asda(){
 // var x = true;
  //var i = 10;
  //while(x){
   //  console.log(x);
   //  if(i>10){
    //   x = false;
   //  }
  //   i++;
 // }
//}

 
  
  



    




