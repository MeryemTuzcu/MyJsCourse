// Dizilerde Sıralama işlemleri, sort Metotu

const isimler = ['emre', 'ali', 'hasan', 'ayse'];

const sayilar = [1,50,41,41,84,8,35,3];
const ogrenciler = [
    {id:12, isim: 'emre', yas: 25},
    {id:22, isim: 'hasan', yas: 15},
    {id:32, isim: 'fatma', yas: 55},
    {id:13, isim: 'nuriye', yas: 19},
    {id:92, isim: 'kemal', yas: 45},
    {id:15, isim: 'mustafa', yas: 75},
    {id:44, isim: 'ceren', yas: 30}

];

console.log(isimler);
// string diziyi a-z sıralama
isimler.sort();

// string diziyi z-a sıralama

const adanZye = isimler.sort();
const zdenAya = adanZye.reverse(); // reverse için sıralanmış bir dizi olmalıdır
const kisa = isimler.sort().reverse();
console.log(zdenAya,);

//sayiları küçükten büyüğe - büyükten küçüğe sıralama
const sirali = sayilar.sort(function(a, b){
    return a-b; // b-a nüyükten küçüğe
});
console.log(sirali);

// nesneleri sıralama

ogrenciler.sort(function(a,b){
    return a.id - b.id;  // b.id - a.id büyükten küçüğe
});
console.log(ogrenciler);

// nesnedeki isimleri sıralama

ogrenciler.sort(function(a,b) {
     if(a.isim < b.isim){
        return-1 ; // 1 ve aşağıdaki -1 olursa büyükten küçüğe sıralar
     }else if(a.isim> b.isim){
        return 1;

     }else return 0;
    
});

ogrenciler.sort(function(a,b) {
    /* if(a.isim < b.isim){
       return-1 ; // 1 ve aşağıdaki -1 olursa büyükten küçüğe sıralar
    }else if(a.isim> b.isim){
       return 1;

    }else return 0;
    */

    // kısa hali
    return(a.isim < b.isim) ? -1 : (a.isim > b.isim ? 1 : 0);
});
console.log(ogrenciler);


// arraylari kopyalamak

let kopya = [];

for(let isim of isimler){
    kopya.push(isim);


}
// spread kullanımı

kopya = [...isimler, ...isimler];
kopya.sort();
console.log(kopya);

function sayiTopla(...parametreler){
    let toplam = 0;
    for(let s of parametreler){

        toplam = toplam + s;
    }
    console.log(toplam);
}

sayiTopla(1,50);

sayiTopla(1,50, 49 , 1);



