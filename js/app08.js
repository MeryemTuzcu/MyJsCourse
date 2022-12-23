// onject
let Meryem = {
    adi: 'Meryem',
    soyAdi: 'Tuzcu',
    dogumYili: 2001,
    evliMi: false,
    sevdigiRenkler: ['turkuaz', 'lila'],
    yasHesap: function (){
        this.yas = 2022 - this.dogumYili;
    }

};

// onject
let Enes = {
    adi: 'Enes',
    soyAdi: 'Şatır',
    dogumYili: 2001,
    evliMi: false,
    sevdigiRenkler: ['kırmızı', 'gri'],
    yasHesap: function (){
        this.yas = 2022 - this.dogumYili;
    }

};

console.log(Meryem.sevdigiRenkler);
Meryem.yasHesap();
console.log(Meryem.yas);

Meryem.soyAdi = 'Şatır';



let evliCift = [Meryem, Enes];
console.log(evliCift[0].soyAdi);

// referans tipleri çalışma mantığı

let yas = 30;
let yeniYas = yas;
yas = 22; // Yeniyas başta atanan yas değerini tuttuğu için bu şekil bir atamayla yeni yasın değeri değişmez

console.log(yas, yeniYas);

let renkler = ['Kırmızı', 'Yeşil'];

let yeniRenkler = renkler;

renkler.push('mavi'); // bu metot ise indexe göre yeni eleman eklemesini istediği için ikisine de mavi rengini ekler

//Obye oluşturup aynı mantıkta yeni bi deper atasaydık yine iki objede de değişecekti

renkler = ['mor', 'siyah']; // bu ise sanki yeni bir tane oluşturulmul gibi bambaşka adreste aynı isim de olsa yer tutar
console.log(renkler, yeniRenkler);


// TEKRAR

let sayi = 5;
const fonk = function (sayi) { // fonksiyonu const şeklinde tanımlayıp da kullanabiliriz.
    sayi = sayi * 2;
    return sayi;

}

console.log(fonk(sayi));
console.log(sayi);

console.log(fonk instanceof Object); // bi nevi typeof gibi yazdığımız türün true false karşılığını söylüyo


let myDizi = [1, 2, 3];
const ikiyleCarp = function (dizi){
    let geciciDizi = []; // asıl diziyi kalıcı değiştirmek istemiyorsak burada geçici bir dizi tanımlarız
    for(let i = 0; i< dizi.length; i++){
        geciciDizi[i] = dizi[i] * 2 ;
    }
    console.log(geciciDizi);
}
ikiyleCarp(myDizi);
console.log(myDizi); 

// Örnk olarak üstteki ikiyle çarpı böl topla vs gibi içeriği aynı işlem farklı şekilde birden çok fonksiyon oluşturmak yerine şöyle bir yöntem kullanabiliriz

const ikiIleCarp = function(sayi){
    return sayi * 2 ;
}

const ikiIleBol = function(sayi){
    return sayi / 2 ;
}

const ucEkle = function(sayi){
    return sayi + 3 ;
}

const birCikar= function(sayi){
    return sayi - 1 ;
}


const diziIslemleri = function (dizi, islem){
    let geciciDizi = [];
    for(let i = 0; i< dizi.length; i++){
        geciciDizi[i] = islem(dizi[i]);
    }
    console.log(geciciDizi);
}

diziIslemleri(myDizi, birCikar); 

// higher order function: parametre olarak fonksiyon alan ya da return olarak fonksyion döndüren fonksyion

// DİZİ İSLEMLERİ HİGHER
//iki ile çar CALLBACK


//örneğin mydizi bi strng olsaydıi myDizi.toUpperCase() şeklinde harflerin hepsini büyütebilirim

// ornk

function adimiSoyle(ad, soyad){
    console.log('Merhaba' + ad + ' ' + soyad);
}

function adimiBagir(ad, soyad, callback){
    const mesaj = 'MERHABA'+ ' ' + ad.toUpperCase() + ' ' + soyad.toUpperCase();
    callback(mesaj);
}

//function mesajGoster(mesaj){
//    console.log(mesaj);
//}

adimiBagir('meryem', 'tuzcu', function(msj){
    console.log(msj);
});  // , den sonra (mesajGoster); diyip yine mesajı üstte yorum satırına aldığımız fonksiyon ile gösterebeilirdik