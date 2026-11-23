//*Oppgave grønn*//
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];

console.log("Oppgave 1"); 
function hilsen(navn) {
    return `Hei, ${navn}!`;
}
console.log(hilsen("Ola"));
console.log(hilsen("Markus"));

console.log("Oppgave 2");
function rektangelAreal (bredde, høyde) {
    return bredde * høyde;
}

console.log("Oppgave 3");
function celsiusTilFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

//*Oppgave Gul*//

console.log("Oppgave 4");
function sum(tall) {
    let sum = 0;
    for (let i = 0; i < tall.length; i++) {
        sum += tall[i];
    }
    return sum
}

console.log("Oppgave 5");
    function gjennomsnitt(tall) {
        return sum(tall) / tall.length
    }

console.log("oppgave 6");
function antallUnderNull(tall) {
    let UnderNull = 0
    for (let i = 0; i < tall.length; i++) {
        if (tall[i] < 0) {
            UnderNull++;
        }
    }
    return UnderNull
}

//Oppgave 7//
function storste(tall) {
  let hoyestetemp = tall[0]
  for (let i = 1; i < tall.length; i++) {
    if (hoyestetemp < tall[i])
        hoyestetemp = tall[i]
  }
  return hoyestetemp
}

//Oppgave 8//
function bareKuldegrader(tall) {

}
  


// Fikset med KI, kopiert fra Benjamin
// AUTOMATISK SJEKK – ikke endre noe under denne linja
let antallOk = 0;
let antallSjekker = 0;

function sjekk(beskrivelse, kjor, forventet) {
  antallSjekker++;
  let faktisk;
  try {
    faktisk = kjor();
  } catch (feil) {
    console.log(`FEIL  ${beskrivelse}  (krasjet: ${feil.message})`);
    return;
  }
  const likt = JSON.stringify(faktisk) === JSON.stringify(forventet);
  if (likt) antallOk++;
  console.log(`${likt ? "OK  " : "FEIL"}  ${beskrivelse}  (fikk: ${JSON.stringify(faktisk)}, forventet: ${JSON.stringify(forventet)})`);
}

console.log("\n===== DEL 1: VÆRAPPEN =====");
console.log("\n--- GRØNN ---");
sjekk("1  hilsen('Ola')", () => hilsen("Ola"), "Hei, Ola!");
sjekk("2  rektangelAreal(4, 5)", () => rektangelAreal(4, 5), 20);
sjekk("3  celsiusTilFahrenheit(100)", () => celsiusTilFahrenheit(100), 212);
sjekk("3  celsiusTilFahrenheit(-40)", () => celsiusTilFahrenheit(-40), -40);

console.log("\n--- GUL ---");
sjekk("4  sum(temperaturer)", () => sum(temperaturer), -33);
sjekk("4  sum([])", () => sum([]), 0);
sjekk("5  gjennomsnitt([2, 4, 6])", () => gjennomsnitt([2, 4, 6]), 4);
sjekk("6  antallUnderNull(temperaturer)", () => antallUnderNull(temperaturer), 6);

console.log("\n--- RØD ---");
sjekk("7  storste(temperaturer)", () => storste(temperaturer), 1);
sjekk("7  storste([-5, -2, -9])", () => storste([-5, -2, -9]), -2);
sjekk("8  bareKuldegrader(temperaturer)", () => bareKuldegrader(temperaturer), [-4, -6, -2, -8, -11, -3]);
sjekk("9  sorterStigende(temperaturer)", () => sorterStigende(temperaturer), [-11, -8, -6, -4, -3, -2, 1]);
sjekk("8–9 temperaturer er uendret", () => {
  const kuldegrader = bareKuldegrader(temperaturer);
  const sortert = sorterStigende(temperaturer);
  if (!Array.isArray(kuldegrader) || !Array.isArray(sortert)) return "bareKuldegrader og sorterStigende må returnere en array";
  return temperaturer;
}, [-4, -6, -2, 1, -8, -11, -3]);

console.log("\n===== DEL 2: SPILL =====");
console.log("\n--- GRØNN ---");
sjekk("10 lagGamertag('Ola', 99)", () => lagGamertag("Ola", 99), "Ola99");
sjekk("11 erGammelNok(16, 18)", () => erGammelNok(16, 18), false);
sjekk("11 erGammelNok(18, 18)", () => erGammelNok(18, 18), true);
sjekk("12 billettpris(true)", () => billettpris(true), 100);
sjekk("12 billettpris(false)", () => billettpris(false), 150);

console.log("\n--- GUL ---");
sjekk("13 velgFraksjon(5000, 5000, 'Horde')", () => velgFraksjon(5000, 5000, "Horde"), "Welcome to the Horde!");
sjekk("13 velgFraksjon(4500, 5500, 'Alliance')", () => velgFraksjon(4500, 5500, "Alliance"), "Welcome to the Alliance!");
sjekk("13 velgFraksjon(4500, 5500, 'Horde')", () => velgFraksjon(4500, 5500, "Horde"), "The faction is currently unavailable on this ruleset due to population imbalance");
sjekk("14 antallOver(runder, 100)", () => antallOver(runder, 100), 3);

console.log("\n===== DEL 3: BREILAN =====");
console.log("\n--- GRØNN ---");
sjekk("15 kanDelta(16, 'GTA 6')", () => kanDelta(16, "GTA 6"), false);
sjekk("15 kanDelta(16, 'Fortnite')", () => kanDelta(16, "Fortnite"), true);

console.log("\n--- GUL ---");
sjekk("16 totalInntekt(deltakere)", () => totalInntekt(deltakere), 700);

console.log("\n--- RØD ---");
sjekk("17 toppTre(resultater)", () => toppTre(resultater), ["Kari", "Jonas", "Ali"]);
sjekk("17 resultater er uendret", () => {
  if (!Array.isArray(toppTre(resultater))) return "toppTre må returnere en array";
  return resultater.map((r) => r.navn);
}, ["Ola", "Kari", "Ali", "Emma", "Jonas"]);

console.log(`\nDu har ${antallOk} av ${antallSjekker} OK.`);