// 8. soru

let xDegeri= parseInt(prompt("X değerini giriniz giriniz: ", '5'));
let yDegeri= parseInt(prompt("Y degerini giriniz: ", '1'));
let f = 0;

if(xDegeri>0 && yDegeri< 0){
   f = 4*xDegeri + 2*yDegeri + 4;



}else if ((xDegeri>0 )&& (yDegeri =0) ){
    f = 2*xDegeri - yDegeri + 3;

} else if((xDegeri< 0) && (yDegeri> 0)){
    f = 3*xDegeri + 4*yDegeri + 3;
}else{
    console.log('İki deger de 0 dan büyük olmamalı');
}
console.log(`Girilen değerlere göre f(${xDegeri},${yDegeri}): ${f}`);




// 9. soru
let not = parseInt(prompt("Notunuzu giriniz ", '5'));
let notSinir= parseInt(not/ 10);
console.log(`Girdiğiniz değer: ${not}, Not Sınırı: ${harflik}`);

if(not ==100){
    notSinir = 9;
}
switch(notSinir ){
    case 9: console.log('Notunuz AA'); break;
}

// 10. soru

let metin = '';

for(let i = 1; i<=10; i++){
    for(let j =1; j <=10; i ++){
        metin = metin +(i + '*'+ j+'=' + (i * j)) + '\t'; // yan yana değerleri sıraladık
    }
    console.log(metin); // burada da örnk 1ler çarpımını ekrana yan yana yazdırmış olduk
    metin = ''; // her i arttığında ekrana bi önceki çarpım tabşosıunu yazmasın diye metini sıfırladık bu sayede bi sonraki 2leri yazdı
}


// 11. soru

let rastgeleSayi = Math.floor(Math.random() * 101);
console.log(rastgeleSayi);

let tahminSayisi = 0;
let tahmin = -1;
while(tahmin != rastgeleSayi){
    let tahmin = parseInt(prompt("Sayı tahmin ediniz: ", '0-100'));
    tahminSayisi++;

        if(rastgeleSayi> tahmin ){
        console.log('Soğuk! Sayıyı arttırın');
        let tahmin = parseInt(prompt("Sayı tahmin ediniz: ", '0-100'));
    }else if(rastgeleSayi< tahmin){
        console.log('Sıcak! Sayıyı azalt');
    }else if(tahmin == rastgeleSayi){
        console.log(`Bulmanız gereken sayı: ${rastgeleSayi},  Kaç seferde bildiniz: ${tahminSayisi} `);

        
    }
}
