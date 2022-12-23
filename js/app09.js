
// foreach
let sayilar = [1,2,3,4,5,6];
    sayilar.forEach (function(sayi, i){
    console.log(sayi, i );
}); // ilk yöntem
console.log( '----------------------');




sayilar.forEach(ikiParametreliFonksiyon); // İKİNCİ YÖNTEM
function ikiParametreliFonksiyon (sayi, index){
    console.log( sayi, index);
} 
console.log( '----------------------');
 

diziyiYazdir(sayilar, function(deger, index){ // ÜÇÜNCÜ YÖNTEM o anki okunan deger. 
    console.log('değer: ' + deger + ' index: ' + index);
});


function diziyiYazdir(dizi, callback){
    for(let i = 0; i < dizi.length; i ++){
        callback(dizi[i], i); // degeri ve indexi hemen yazdırmıyorum ama çağırıyorum ve yukarıda bu işlemi ekrana yazdırıyorum
    }
}

// MAP ARRAY HELPER FPNKSYİNONU ben güncel verilerimi bozmamak için geciciaDizi vs gibi tanımlama yapmıştım onun yerine yarıyor

const sayiDenemeleri = [1,2,3,4,5,6];
// sayinemeleri = ... gibi yeni tanım yaptırmaz çünkü const değiştirelemez ama içine push yapabilirim

const yeniSayiDenemeleri = sayiDenemeleri.map(function(sayi){
    return sayi * 2 ;
});

console.log(sayiDenemeleri);
console.log(yeniSayiDenemeleri);

 
const kitaplar = [
    {adi: '1', sayfaSayisi: 30},
    {adi: '2', sayfaSayisi: 40},
    {adi: '3', sayfaSayisi: 50},
];

const sayfaSayilari = kitaplar.map(function(kitap){
    return kitap.sayfaSayisi;
});
console.log(kitaplar);
console.log(sayfaSayilari);
//Arrow function örneği
const yeniKitaplar = kitaplar.map((kitap) => 'Kitap Adı: ' + kitap.adi +  ' Sayfa Sayısı:' + kitap.sayfaSayisi);
console.log(yeniKitaplar);


const sayilarTekrar = [1,2,3,4,5,6]; 
function kendiMapim(sayilarTekrar, islem){
    const yeniDizi = [];

    for(let i = 0; i < sayilarTekrar.length; i ++){
        yeniDizi.push(islem(sayilarTekrar[i], i ));
    }
    return yeniDizi;
}

const olusanYeniSayiTekrar = kendiMapim(sayilarTekrar, function (sayiTekrar, index){
    console.log('index:' + index );
    return sayiTekrar * 2;
});
