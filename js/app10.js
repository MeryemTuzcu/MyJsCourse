// Fılter Array Helper Fonksiyonu

const bitkiler = [
    {id: 1, ad: 'üzüm', tur: 'meyve'},
    {id: 2, ad: 'çilek', tur: 'meyve'},
    {id: 3, ad: 'muz', tur: 'meyve'},
    {id: 4, ad: 'ıspanak', tur: 'sebze'},
    {id: 5, ad: 'kereviz', tur: 'sebze'}
];

/* const  meyveler = bitkiler.filter(function(bitki){

    return bitki.tur === 'meyve';

});

const sebzeler = bitkiler.filter(function(meyve){
    return bitki.tur === ' sebze';
    
});
console.log(sebzeler);
console.log(meyveler); */

// kendi filtre yapım
function kendiFiltrem( dizi, filtreSarti){
    const geciciDizi = [];

    for(let i = 0 ; i < dizi.length; i ++){
        const sonuc = filtreSarti(dizi[i]);
        if(sonuc){
            geciciDizi.push(dizi[i]);
        }
    }
    return geciciDizi;
}/* 
İLK YÖNTEM AMA DAHA KULLANIŞLI YAPABİLİRİZZ

function filtre(bitki){
    return bitki.tur === 'meyve';
} 
const meyveler = kendiFiltrem(bitkiler, filtre);*/
function filtre(bitki, sart){
    return bitki.tur === sart;
 }
const meyveler = kendiFiltrem(bitkiler, bitki => bitki.tur=== 'meyve'); // arrow ile tek bir işlem olduğu için returnsuz parantezsiz kod yazabildim

console.log(meyveler);

const sonuc = meyveler.find(function(meyve){
    return meyve.id == 1;
});
console.log(sonuc);

// kendi fonksiyonumuz ile id buldurma.



function idMetotum(bitkiler, aranilanDeger){
    let bulunanEleman = undefined;

    for(let i = 0 ; i< bitkiler.length; i ++){
        if(aranilanDeger(bitkiler[i])){
            return bitkiler[i];
        }
    }
    return bulunanEleman;

}

const sonuc2 = idMetotum(bitkiler, function(bitki){
    return bitki.id ===4;
});
console.log(sonuc2);

// every ve some yardımcıları

const sonuc3 = bitkiler.every(function(bitki){ // bütün hepsini kontrol eder ve hepsinin şarta uyması gerekir
    return bitki.id < 3 ;
});
const sonuc4 = bitkiler.some (function(bitki){ // aralarından bir tanesi şartı sağlasa bile yeter.
    return bitki.id < 3 ;
});
console.log(sonuc3, sonuc4);





// redeuce
const  sonucReduce = bitkiler.reduce(function(toplam, curr, index){

    return toplam = toplam + curr.id;
}, 0);
console.log(sonucReduce);
//





