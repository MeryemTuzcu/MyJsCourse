// 2 Explicit Binding
//direkt olarak this'in neyi belirttiğini söylüyoruz

//call, bind, apply

const emre = {
    ad:'emre',
    yas: 32,
    okul: 'ege'
}
const hasan = {
    ad:'hasan',
    yas: 22,
    okul: 'marmara'
}


const bilgilerimiYazdir = function (renk1, renk2){ // kaç tane değer yazacağmı bilmiyorsam ...args
    console.log(this);
    console.log(`benim adım ${this.ad} yaşım ${this.yas} okulum ${this.okul}`);
    console.log(`Sevdiğim renkler ${renk1} ve ${renk2}`); // ${args} // şeklinde değişebilirdim
}
 //bilgilerimi yazdir içerisinde this kullandım ve ben bu thisin emreyi göstermesini istiyorsam direkt belirttim

//bilgilerimiYazdir.call(emre, 'kırmızı', 'mavi'); // ilk değer this neyi göstersin diğerleri ise parametreye verdiğim değerler

//bilgilerimiYazdir.apply(hasan, ['kırmızı', 'mavi', 'yeşil']) // tek fark parametreleri dizi oalrak belirtmek args olarak değiştirmedeğim için yeşil gözükmicek konsolda

const cagir = bilgilerimiYazdir.bind(hasan,['kırmızı','mavi']); // direkt fonksiyonu çağırmıyor bu yüzden bir değişkene atıyoruz
cagir();


// new Binding

const Araba = function(renk, model){
    //içeride oluşturulan this o an oluşturulan objeyi temsil ediyor
    this.renk = 'benim rengim' + renk;
    this.model = model;
    this.bilgiler = function(){
        console.log(this.renk)
        console.log(renk); 
        // o anki objenin renk değerine erişmek için this.renk yapmak gerekiyor SONUC: kırmızı
        // saddece renk yazsaydın parametreye yazdığımız renk değişkenini alırdık SONUC: benim rengim kırmızı
    }

}

const honda = new Araba('kırmızı', 'civic');
honda.bilgiler();


// 4 Window Binding 
console.log(this); 
//DAHA ÖNCE DE BASHETTİK sağında solunda kural yok bu yüzden this daima windowu gösteriyor


