// fonksiyonlat

let toplam1 = verilenIkiDegerArasiSayilarinToplami(0,10);
let toplam2 = verilenIkiDegerArasiSayilarinToplami(10,30);
console.log('toplam 1:'+ toplam1 + ' ' +  'toplam2: ' + toplam2);


function verilenIkiDegerArasiSayilarinToplami(baslangicSayi, bitisSayi){

    let toplam = 0;
    for(let i = baslangicSayi; i<= bitisSayi; i++){
        toplam = toplam + i ;
    }
    //console.log('Toplam:' + toplam);
    return toplam;
}

// Global ve Local Scope 
//Fonksiyon ve for döngüleri gibi içeride tanımlanan değerler dışarıda tanımlanmış sayılmaz buna local denir. Global ise dışarıya yazdığım tanımlardır ve her yerde kullanıbailir
//ES6 Arrow Function

const selamVer = function(){ // fonksiyonu const şeklinde tanımlayıp da kullanabiliriz.
    console.log('Merbalar');
}

selamVer();

// ya da

const fatArrow = _ =>{ // parametre almıyorsa alt tire kullanımı da yapılabilir

    console.log('FatArrowlu Merbalar');

}
fatArrow();

const fatArrowluParametre = sayi =>{ // tek bir parametre varsa () kullanmasak da olur
    return sayi * sayi; // eğer bunun gibi tek bi return tek bi işlem gerçekleştiriliyorsa ise bu const FatArrow
    // aşağıdaki gibi de yazılabilirdi
}
const fatArrowKısa = sayii => sayii * sayii;
console.log(fatArrowluParametre(2));
console.log(fatArrowKısa(5));


//1'den fazla parametre kısa versiyon
 const sayiTopla = (s1, s2) => s1 + s2;
 console.log(sayiTopla(5,10));

 // orta uzun versiyon

  const sayiTopla2 = (s1,s2) =>{
    return s1 +s2;
  }

// en klasik yöntem hepsi aynı

const sayiTopla3 = function(s1,s2){
    return s1+s2;
}
// Array dizi kavramı

let renkler = ['mavi', 'yeşil', 'mor'];
 // array şeklinde gelmemesi için toString() kullanıyoruz.
// ekleme yapabiliyoruz.
renkler[3] = ' kırmızı';// console.log dan önce bu yazılmalı yoksa görünmez.

renkler[10] = 'siyah'; 
renkler[11] = 'beyaz'; // aradaki indexlerde değer olmaadığı  için ekrana  yazıldığında , koyar.
console.log(renkler.toString());
console.log(renkler.length); // dizi boyutunu ekrana yazdırır.

// index dizi boyutunun 1 eksiğidir.
// diziyi yazdırmak için

for(let i = 0; i< renkler.length; i++){
    console.log(renkler[i]);
}
console.log(' FARKLI ŞEKİL');

for(let oankiDizi of renkler){
    console.log(oankiDizi);
}
// bool, strng ya da int her türlü değeri tek bir dizi içerisine yazabiliriz

//ARRAY İÇİN ÖNEMLİ BİLGİLER

renkler.push('turkuaz'); // dizinin sonuna eleman ekler pop ise son elemanı siler let cikardim = renkler.pop(); diyip cikardim objesini çağırdığımda son elemana erişebilirim.
console.log(renkler.toString());

renkler.shift(); // en baştaki elemanı çıkarır.
console.log(renkler.toString());

renkler.unshift(' YENİİ');// en başa eleman ekler
console.log(renkler.toString());

delete renkler[11]; // BELİRTİLEN ELEMANI SİLER
console.log(renkler.join('|')); // , yerine istediğimizi araya ekleyebiliyoruz


let sayilar = [1, 2, 3, 4 , 5, 6 , 7 ,8 ];

sayilar.splice(8, 0, 9, 10);// ilk başa yazılan kaçıncı elemandan itibaren demek , ikinci yazılan silmek için 0silme demek sonrakiler de eklenecekler

sayilar.splice(0,4); // 0'dan başla 4. eleman dahil sil

// iki diziyi birleştirmek için örnk let sayilarim = teksayilar.concat(cisftsayilar);