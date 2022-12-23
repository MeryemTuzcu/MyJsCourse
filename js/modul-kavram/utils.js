export default class Ogrenci{
    constructor(ad,id){
        this.ad = ad;
        this.id = id;
    }
    bilgileriniSoyle(){
        console.log(`ad: ${this.ad}, yai:  ${this.id}`);
    }
}

export const PI = 3.14;

export function sayilariTopla(s1,s2){//aşağıda yad ayanında export ederek ulaşabiliyoruz
    console.log(s1+s2);
}

function sayilariCarp(s1,s2){
    console.log(s1*s2);
}
function sayilariBol(s1,s2){
    console.log(s1/s2);
}
export  function selamVer(ad){ // her dosya için bir tane default olur
    console.log(`Hoşgeldiniz ${ad}`);
}

export const test = ()=>{
    console.log('test');
}


export{
    sayilariBol,
    sayilariCarp,
    
}