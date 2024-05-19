// Kameň- Papier-Nožnice

const volba = ["kamen","papier","noznice"];
const hracDisplej = document.getElementById("hracDisplej");
const pocitacDisplej =document.getElementById("pocitacDisplej");
const vysledokDisplej = document.getElementById("vysledokDisplej");
const displejSkorovanieHraca = document.getElementById("displejSkorovanieHraca");
const displejSkorovaniePocitaca = document.getElementById("displejSkorovaniePocitaca");
let skorovanieHraca = 0;
let skorovaniePocitaca =0;

function hratHru(volbaHraca){

    const volbaPocitaca = volba[Math.floor(Math.random()*3)];
    let vysledok = "";

    if(volbaHraca===volbaPocitaca){
        vysledok = "JE TO REMÍZA!";
    }
    else{
        switch(volbaHraca){
            case "kamen":
               vysledok = (volbaPocitaca === "noznice") ? "VY STE VYHRALI!":"PREHRALI STE!";
               break;
            case "papier":
                vysledok = (volbaPocitaca === "kamen") ? "VY STE VYHRALI!":"PREHRALI STE!";
               break;
            case "noznice":
                vysledok = (volbaPocitaca === "papier") ? "VY STE VYHRALI!":"PREHRALI STE!";
               break;
        }
    }



    hracDisplej.textContent = `HRÁČ: ${volbaHraca}`;
    pocitacDisplej.textContent = `POČÍTAČ: ${volbaPocitaca}`;
    vysledokDisplej.textContent = vysledok;

    vysledokDisplej.classList.remove("zelenyText","cervenyText");

    switch(vysledok){
        case "VY STE VYHRALI!":
            vysledokDisplej.classList.add("zelenyText");
            skorovanieHraca++;
            displejSkorovanieHraca.textContent = skorovanieHraca;
            break;
        case "PREHRALI STE!":
            vysledokDisplej.classList.add("cervenyText");
            skorovaniePocitaca++;
            displejSkorovaniePocitaca.textContent =skorovaniePocitaca;
            break;
    }
}