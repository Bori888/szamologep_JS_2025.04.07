const KIJELZO = document.querySelector(".kijelzo")


export function szamLetrehoz() {
    const SZAMOK = document.querySelector(".szamok")
    for (let i = 0; i < 10; i++) {
        SZAMOK.innerHTML += `<button>${i}</button>`
        
    }
    
}
export function gombEsemeny(){
    const MEGJELENIT = document.querySelectorAll(".szamok button") /*All ha több gombunk van*/
    for (let i = 0; i < MEGJELENIT.length; i++) {
       MEGJELENIT[i].addEventListener("click", function() {
        KIJELZO.innerHTML += i
        
       })

        
    }
}
export function muvJel() {
    const JELOSSZ = document.querySelector("#osszeadas")
    const JELKIVON = document.querySelector("#kivonas")
    const JELSZOR = document.querySelector("#szorzas")
    const JELOSZT = document.querySelector("#osztas")
    const JELEGYENLO = document.querySelector("#egyenlo")
    
    const JELPONT = document.querySelector("#pont")
    let lista = [JELOSSZ, JELKIVON, JELSZOR, JELOSZT, JELEGYENLO, JELPONT];
    return lista
    
    

}
export function szamolas(lista) {

    for (let i = 0; i < lista.length; i++) {
        lista[i].addEventListener("click", function () {
            KIJELZO.innerHTML +=  lista[i].textContent;
        })
        
        
        
    }
    
    
}
export function torol() {
    const JELTOROL = document.querySelector("#torles")
    JELTOROL.addEventListener("click", function() {
        KIJELZO.innerHTML = "" 
    })
    
    
}

