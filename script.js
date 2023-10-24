//Die Grundlage für einen Fetch. Fetch ist eine Funktion, die einen Request an einen Server sendet und das Ergebnis zurückgibt
//In der ersten Zeile wird der Link zur API definiert. Dieser kann immer angepasst werden.
console.log('script.js');
const app = document.querySelector('#app');
let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
//Hier startet der Fetch mit der definierten URL.
fetch(url)
    //Wenn der Fetch erfolgreich war, wird die Antwort in ein Objekt gespeichert.
    .then(response => response.json())
    //Wenn das Objekt gespeichert wurde, wird es in eine Variable gespeichert. Diese Variable heisst "data".
    .then(data => {
        //Hier kann man mit der Variable arbeiten. Entweder das DOM mit Informationen erweitern, oder eine neue Funktion aufrufen.
        //Mit "Console.log(data);" sieht man den Inhalt des Objekts.
        console.log(data.results);
        console.log(data.results[0].name);
        console.log(data.results[0].url);
        app.innerHTML = "Name: " + data-results[0].name;
        //Ab hier kann man entweder mit der Variable data arbeiten, oder eine funktion aufrufen mit data als Parameter.

        //Beispiel eines Funktionsaufrufs
        //"showSomething(data);"

        })
        //Bei einem Fehler wird dieser gefangen "catch" und eine Fehlermeldung in der Konsole ausgegeben.
    .catch(error => console.log(error))
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// JavaScript for Scrolly Telling
// const sections = document.querySelectorAll('.section');

// function checkIfElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//     );
// }

// function handleScroll() {
//     sections.forEach((section) => {
//         if (checkIfElementInViewport(section)) {
//             section.classList.add('in-viewport');
//         } else {
//             section.classList.remove('in-viewport');
//         }
//     });
// }

// window.addEventListener('scroll', handleScroll);
