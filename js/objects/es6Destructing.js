//array destructuring

let isim = [ 'emre', 'altunbilek'];

const [first, last] = isim;

console.log(first, last);

const renkler = ['sarı', 'yesil', 'mavi', 'kırmızı', 'kahverengi', 'turuncu', 'mor'];

const [r1, r2, , r3] = renkler; // aradaki maviyi gösterememek için örnk , koyuyoruz

const [c1, c2, ...geriKalanRenkler] = renkler;
console.log(c1,c2, geriKalanRenkler); // cleri text kalanı dizi şekline ekrana verdi

//default varsayılan değer ataması
const [t1,t2,t3='bilinmiyor',t4='bilinmiyor' ] = ['galatasaray', 'beşiktaş'];

console.log(t1,t2,t3,t4);// t3 vet4yazılmadıysa undefined verir bunun için yukarıdaki gibi undefined almamak için uğraşabiliriz

// sağ tarafa gidip fener yazarsak okutulunca feneri okutmaya başlar yoksa bilinmiyor demye devam


// object destructuring

let ayarlar = {
    baslik: ' Js adamdır',
    genislik: '300px',
    yukseklik: '300px'
};


const {baslik:b='varsayılan baslik',genislik:g,yukseklik:y} = ayarlar; // eğet ayarlar içne başlık tanımlamasaydık 'varsayılan başlık' yazdırılırdı

console.log(b,g,y);

const il = 'ankara';
const ilce = 'çankaya';

const sehir = {
    il: il,
    ilce:ilce
}
const sehir2 = {il, ilce}; // aynı tanımlar yapılacaksa böyle tek satırda yazarak parametre belirtmemize gerk yok

console.log(sehir2);

const person = {
    adı:'mery',
    yas: 32,
    il:'erzincan',
    ilce: 'merkez'
}
const {yas, ...geriKalanDegerler} = person;

//console.log(person.yas);  normalde  bu mantıklı ama çok fazla değişken atayıp tek tek person.bla bla çok uğraş verici oluyor
console.log(yas, geriKalanDegerler); // dizi gibi böldüm ve bu şekilde sırası farklı aynı verileri ekrana verdirdim


let kisi = {
    ad: {
        firstName: 'Berfin Meryem',
        lastName: 'Tuzcu'
    },
    sevdigiRenkler: ['turkuaz', 'lila'],
    yas2: 21
};

const {ad} = kisi;

console.log(ad); // isim soyisim de geliyor fakat sadece soyisme ulaşması dah farklı

const {ad: {firstName, lastName}, sevdigiRenkler: [renk1, renk2], yas2} = kisi; // önceki örnekler gibi atama yapmadık iç içe obje için ayırma işlemi gerçekleştirdik

console.log(lastName);  
console.log(renk1);