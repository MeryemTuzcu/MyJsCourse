// 12. soru



let sayi = parseInt(prompt("Çarpılacak değerleri giriniz: ", '0-100'));

let carpimSayi = 1;
while(sayi != 0){
    
   
    carpimSayi = carpimSayi * sayi;

    sayi = parseInt(prompt("Çarpılacak değerleri giriniz: ", '0-100'));
}
console.log('Girdiğiniz değerlerin çarpımı: ' + carpimSayi);


// 13. soru

let sayi1 = parseInt(prompt("Ebobu alınacak 2. değeri giriniz: ", '0-100'));
let sayi2 = parseInt(prompt("Ebobu alınacak 2. değeri giriniz: ", '0-100'));

let ebob = 1 , kontrol = 2;

while(kontrol<= sayi1 && kontrol<= sayi2){
    if(sayi1 % kontrol == 0 && sayi2 % kontrol ==0){
        ebob = kontrol;
    }
    kontrol++;

}

if(ebob == 1){
    console.log('Aralarında asal');
} else{
    console.log('Sayıların ebobu: ' + ebob);
}

// 14. soru kullanıcıdan alınan sayıya kadar sayının asal sayılarını yazdır
let kulSayi = parseInt(prompt("Asal sayı değerleri yazdırılacak sayıyıgiriniz: ", '2-100'));

let asalDegerler = '';
for(let i = 2 ; i<= kulSayi; i ++){
     
    let asalMi= true;

    for(let j = 2; j < i ; j++){

        if(i%j ==0){
            asalMi = false;
            break;

        }
    }
    if(asalMi == true){
        asalDegerler = asalDegerler + i + ' ';


    }
}
console.log(asalDegerler);


// 1 + 2 + 4 + 7 + 11 + 16 + 20 + 23 + 25 + 26+ 28  + 31 + 35 = 229 koduAA

let artisMiktari = 0 ;
let toplam = 0;
let artiyorMu = true;
let gosterilecekMetin = '';

for(let i = 1; i <= 35; i = i+ artisMiktari){
    
    if(i !=35){


        toplam = toplam + i ;
        gosterilecekMetin = gosterilecekMetin + i + ' + ';
    }else{
        toplam = toplam + i;
        gosterilecekMetin = gosterilecekMetin + i + ' = ' +  toplam;
    }
    
    
    if(artisMiktari <= 4 && artiyorMu == true){
        artisMiktari++;
        if(artisMiktari ==5){
            artiyorMu = false;
            continue;
        }
    }else{
        artisMiktari--;
        if(artisMiktari == 1){
            artiyorMu = true;
            continue;
        }

    }

}
console.log(gosterilecekMetin);
