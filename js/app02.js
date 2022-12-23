let girilenSaniye = parseInt(prompt("Saniye giriniz", '100'));
dakika = parseInt((girilenSaniye/60), 10) ;
dakika = dakika % 60 ;
kalanSaniye= girilenSaniye % 60;
console.log(`Girilen saniye:   ${dakika} dakika ve ${kalanSaniye} saniyedir`);


let fahren = parseInt(prompt("Fahrenheit cinsincden sıcaklık giriniz "));
let celcius =  (5/9) *(fahren -  32);
console.log(celcius.toFixed(2)); //  sadece virgülden sonra 2 değer göstermek için


let yil = parseInt(prompt("Bir Yıl Giriniz ",'2020'));
if ((yil % 400 == 0) || ((yil % 4 == 0)&&(yil % 100 !== 0) )){ 
// let artikYilMİ = ((yil % 400 == 0) || ((yil % 4 == 0)&&(yil % 100 !== 0) ); 
//console.log(artikYilMi); Bize True False da döndürerek buldurabilirdi
    console.log('Artık Yıl Girdiniz');
} else if(yil == 4100){
    console.error('Yanlış işlem');

}else{
    console.log('Girdiğiniz değer artık yıl değildir');
}

let asalMi = true;
if(asalMi){ // (asalMi == true ) ile koddaki aynı anlama gelir
    
}



let a = 10, b = 5, c = 0;
if(a > b){
    c = a + b;

} else {
    c = a - b ;
}
console.log('c değeri:' + c );

//Aşağıdaki kod yukarıdakiyle aynı işlevi görür

c= (a<b) ? (a + b) : (a - b)
console.log('cnin yeni değeri:'+c ); // soru işaretinin hemen yanındakine doğruysa döner, yanlış ise a- b döner

let haftaninGunu = 1;
switch (haftaninGunu){

    case 1 : console.log('Pazartesi'); break;
    case 2 : console.log('Salı'); break;
    case 3 : console.log('Çarşamba'); break;
    case 4 : console.log('Perşembe'); break;
    case 5 : console.log('Cuma'); break;
    case 6 : console.log('Cumartesi'); break;
    case 7 : console.log('Pazar'); break;
    default: console.log('Geçersiz Gün girilmiş');
}
console.log('Çıkış Yapıldı'); 


// FAlSE, 0 , '' , null, undefined , NaN FALSEY diğer her şey truty

for( let i = 0 , j = 0 ; (i + j )< 20; i = i + 5, j = j + 2){// şuraya atılacak bi hatalı virgül satır içinin çalışmasını engeller{
    console.log('Döngü Çalıştı');
    console.log(' i değeri:'+ i + ' j değeri: ' + j );
}
// for içine sonsuz bir döngü için; ; yazılabilir.
// tanımlanan let i değeri yalnızca for döngüsü için tanımlı kabul edilir.
// eğer let i = 0; olarak dışarıda tanımlayıp for döngüsü içinde tekrar yapsaydık bu sefer döngü dışında çağırdığımız log çalışırdı fakat koşul yanlış işşler hatalı sonuç alırdık


// Tekrar eden bir kodum var ne kadar çalışacağını biliyorum = FOR
// Kaç kere tekrar etmesi gerektiğini bilmiyorum ama ŞAartımın doğru olduğu sürece devam etsin istiyorum WHILE
// Kullanıcı girdisine bakmaksızın Veriyi ilk göstermek gibi durumlarda DO WHILE
//BREAK kır döngüden çık
// CONTİNUE istenilen elemanı atla devam et döngüden çıkma
//