const KIJELZO = document.querySelector(".kifejezes");


export function szamGombokLetrehozasa() {
    const SZAM =document.querySelector(".szamok")
    for (let i = 0; i < 10; i++) {
        SZAM.innerHTML +=`<button>${i}</button>`
        
    }

    
}


export function szamokMegadas() {
        const SZAMOK = document.querySelectorAll(".szamok button");
        let szam = "";
        for (let index = 0; index < SZAMOK.length; index++) {
          SZAMOK[index].addEventListener("click", function () {
            szam = index;
            if (!(szam === 0 && KIJELZO.innerHTML.length === 0)) {
              KIJELZO.innerHTML += szam;
            }
          });
        }
}

    

