// soru 1 
/* 
 sehirler diye bir dizi oluştur
 her dizi elemanı sehirler ile ilgili bilgiler içermeli

 bu bilgiler sehrin adı, plaka numarası ve sehrin komsuları olabilir

 diziyi oluşturduktan sonra sehir adlarına göre zden a ya sıralayıp ekrana yazdır
*/


const sehirler= [
    {plaka: 24, adi: 'Erzincan', komsu:'Sivas'},
    {plaka: 42, adi: 'Konya', komsu:'Afyon'},

    {plaka: 34, adi: 'İstanbul', komsu:'Kocaeli'},
    {plaka: 06, adi: 'Ankara', komsu:' Eskişehir'},

    {plaka: 36, adi: 'İzmir', komsu:' Aydın'},
    {plaka: 07, adi: 'Antalya', komsu:' Isparta'}
];

sehirler.sort(function(a,b) {
    if(a.adi < b.adi){

        return 1 ; // 1 ve aşağıdaki -1 olursa büyükten küçüğe sıralar
    }else if(a.adi> b.adi){
        return - 1 ;

    }else return 0;
   
});
console.log(sehirler);


// soru 2 
/* 
kullanıcıdan alınan değerlere kadar olan sayılar dizisini fibonacci seklinde yazdır
ornk 0 1 1 2 3 5 8 13 21

*/


//const dizi = [];
function fibonacci(sayi){

    let dizi = [0,1];

    for(let i = 2; i < sayi; i++){
        const oanki = dizi[i - 1] + dizi[i - 2];
        if(oanki< sayi){
            dizi[i] = oanki;
        }else{
            break;
        }
    }
    return dizi;
}
console.log(fibonacci(50));
//soru 3 

/* 
ogrencileri tutan bir dizi oluştur
her bir ogrenci nesnesinde ad, soyad, id değerleri olmalı
id numarası çift olan öğrencilerin adı ve soyadı birleştirilmi halde tutan diziyi
adan zye sıralı sekilde ekrana yazdır
bunları yaparken map filter sort metotlarını kullan
işlem bittikten sonra kodları arrow function ve zincirleme haline dönüştür
*/

const ogrenciler = [
    {id:12, isim: 'enes', soyad: 'şatır'},
    {id:22, isim: 'hüseyin', soyad: 'aktaş'},
    {id:32, isim: 'fatma', soyad: 'düz'},
    {id:13, isim: 'nuriye', soyad: 'yolar'},
    {id:92, isim: 'kemal', soyad: 'derin'},
    {id:15, isim: 'mustafa', soyad: 'biber'},
    {id:44, isim: 'ceren', soyad: 'koç'}

];

function kisaVersiyon(ogrenciler){
    const sonuc = ogrenciler.filter(function (ogrenci){
        return ogrenci.id % 2 ==0;
    }).map(function(ogrenci){
        return ogrenci = ogrenci.isim + ' '+ogrenci.soyad;

    }).sort(function(a,b) {
        if(a.isim < b.isim){
    
            return 1 ; // 1 ve aşağıdaki -1 olursa büyükten küçüğe sıralar
        }else if(a.isim> b.isim){
            return - 1 ;
    
        }else return 0;
        
    });
    console.log(sonuc);
}

kisaVersiyon(ogrenciler);