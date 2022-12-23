//1. soru

let sayi1= parseInt(prompt("Lütfen 1. sayıyı giriniz: ", '1'));
let sayi2 = parseInt(prompt("Lütfen 1. sayıyı giriniz: ",'2'));
let sayi3 = parseInt(prompt("Lütfen 1. sayıyı giriniz: ", '3'));

let ort = (sayi1+sayi2+sayi3)/ 3 ;

console.log(`Üç Sayının Ortalaması: ${ort}`);

// 2. soru

let deger1= parseInt(prompt("Lütfen 1. açıyı giriniz: ", '100'));
let deger2 = parseInt(prompt("Lütfen 1. açıyı giriniz: ",'40'));
let deger3 = parseInt(prompt("Lütfen 1. saçıyı giriniz: ", '40'));


if(deger1 == deger2 == deger3){
    console.log('Bu Eşkanar bir üçgendir');
}else if((deger1 == deger2) || (deger1 == deger3) || (deger2 == deger3)){
    console.log('Bu İkizkenar bir üçgendir');
}else if(deger1 != deger2 != deger3){
    console.log('Bu ÇeşitKenar bir üçgendir');
}

// 3. Soru
let vize = parseInt(prompt("Lütfen Vize notunuzu giriniz: ", '50'));
let final = parseInt(prompt("Lütfen Final notunuzu giriniz: ",'20'));

let gecerNot = (vize*40 / 100 )+ (final *60 / 100);
 
if(gecerNot>= 50){
    console.log('Tebrikler geçtiniz');
}else{
    console.log('Dersi tekrar alınız');
}

// 4. soru

for(let i = 1; i<6; i++ ){
    console.log('Meryem FOR' + i );

}

let j = 1

while(j<6){
    console.log('Meryem WHILE'+ j);
    j++;
}
let k = 1
do{
    console.log('Meryem DO WHILE '+ k);
    k++;

}while(k<6);

// SORU 5

let toplam = 0;

for(let i = 0; i<101; i++){

    toplam = i+ toplam;

}
console.log(toplam);

// 6. soru

let yazdirilacak='';
for(let i = 1; i<11; i++){
    if(i != 10){
        yazdirilacak = yazdirilacak + i + ',';
    }else{
        yazdirilacak = yazdirilacak + i ;
    }
}
console.log(yazdirilacak);


//7. Soru
let hesapla= parseInt(prompt("Faktoriyeli alınacak sayıyı giriniz: ", '10'));
let sonucFakto= 1;
for (let i = 1; i<=hesapla; i++){
   
    sonucFakto = sonucFakto * i;
    
}
console.log( 'Sonuc:' + sonucFakto );

