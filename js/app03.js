let rastgeleSayi = (Math.floor(Math.random() * 100) -  Math.floor(Math.random() * 10));

let kullaniciSayi = parseInt(prompt("Sayi Tahmin edebilir misin? ",' 10'));
let birlerBasamagi = rastgeleSayi % 10 ;
let onlarBasamagi = Math.floor(rastgeleSayi / 10) ;

let kulBirlerBasamagi = kullaniciSayi %10;
let kulOnlarBasamagi = Math.floor(kullaniciSayi / 10);

console.log(`Sistemin ürettiği sayı: ${rastgeleSayi} kullanıcın tahmini: ${kullaniciSayi}`);


if(rastgeleSayi === kullaniciSayi){
    console.log('TEBRİKLER! 10000TL KAZANDINIZ!');
    //console.log('Sayı:' + rastgeleSayi);
}else if((birlerBasamagi ===kulOnlarBasamagi)&&(onlarBasamagi === kulBirlerBasamagi)){

    console.log('TEBRİKLER 5000Tl kazandınız!');
    console.log(rastgeleSayi, kullaniciSayi);

}else if(birlerBasamagi ===kulBirlerBasamagi || onlarBasamagi === kulOnlarBasamagi){
    console.log('TEBRİKLER 1000Tl kazandınız');
    console.log(birlerBasamagi, kulBirlerBasamagi);
}else{
    console.log('Bugün bir şey kazanamadınız:(');
}