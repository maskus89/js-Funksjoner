//*Oppgave grønn*//

console.log("Oppgave 1"); 
function hilsen(navn) {
    return `Hei, ${navn}!`;
}
console.log(hilsen("Ola"));
console.log(hilsen("Markus"));

console.log("Oppgave 2");
function rektangelareal (bredde, høyde) {
    return bredde * høyde;
}
console.log(rektangelareal(4, 5));

console.log("Oppgave 3");
const celcius = 20;
function celciusTilFahrenheit(celcius) {
    const formel = (celcius * 9/5) + 32;
    return formel;
}
console.log(celciusTilFahrenheit(celcius));

//*Oppgave Gul*//

console.log("Oppgave 4");
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];
let sum = 0;
for (let i = 0; i < temperaturer.length; i++) {
    sum += temperaturer[i];
}
console.log(sum);

console.log("Oppgave 5");{
    const gjennomsnitt = sum / temperaturer.length;
    console.log(gjennomsnitt);
}

console.log("oppgave 6");
function antallundernull(tall) {
    for (let i = 0; i > temperaturer.length; i++) {
        
    }
}
