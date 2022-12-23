/*  const enes ={
    ad: 'Enes', 
    yas: 21,
    evliMi: true,
    sevdigiRenkler: ['kırmızı', 'siyah'],
    adres:{
        il: 'Afyon',
        plakaKodu: 03,
    },
    bilgileriSoyle: function(){
        return `Kullacının adı: ${this.ad} , Memleketi: ${this.adres.il}`;
    },
    ['full-name']:'Enes Şatır'
 };

 console.log(enes.bilgileriSoyle());

 enes.yas = 22;
 enes.okul = 'Gelişim Üniversitesi'; // bunu sonradan eklemek matıklı değil sql kullanıldığında vs

 delete enes.okul;
 console.log(enes);

 BİRDEN FAZLA VERİ EKLEMEK İSTERSEK AŞAĞIDAKİ GİBİ YAPMALIYIZ
 */

 const enes = createOgrenci('enes', 21, false, 'gelişim');
 const meryem = createOgrenci('meryem', 21, true, 'medipol');
 
 
 
 
 //factory functions
 function createOgrenci(ad,yas,evliMi,okul){
     return{
 
         isim:ad,
         yas:yas,
         evliMi:evliMi,
         okuduguOkul: okul,
         //bir fonksiyonun içerisinde fonksiyon varsa artık ona method diyoruz
         bilgileriSoyle: function(){
             return `Kullacının adı: ${this.isim} , Evli mi: ${this.evliMi}`
         }
 
     };
 }
 
 console.log(enes.bilgileriSoyle());
 console.log(meryem);
 
 //constuctor functions
 
 
 function Ogrenci(ad,yas,evliMi,okul){
     this.isim = ad;
     this.yas = yas;
     this.evliMi = evliMi;
     this.okuduguOkul = okul;
     this.bilgileriSoyle = function(){
         return `Kullacının adı: ${this.isim} , Evli mi: ${this.evliMi}`
     }
     
 
 }
 // new kullanığdığında 3 şey gerçekleşir
 // yeni bir obje oluştur.
 // return yazmak zorunda kalmayız
 // this kelimesini o an oluşturulan nesneye bağlar
 
 
 
 console.log(this); // o an oluşturulan ekranı temsil ediyo
 const yunus = new Ogrenci('yunus', 30, false, 'itü');
 console.log(yunus); 
 
 const yeni = new yunus.constructor('yeni', 20, true,'a');
 console.log(yeni); // bu şekilde de yeni item oluştıurup ekleme yapılabiliyor
 
 // 1 jsdeki tüm objeler onu oluşturan constructor fonksiyonuu erişenbilir
 //  2 js ie beraber gelen built in contructor functioları vardır
 // 3 diziler ve fonksiyonlar aslında object
 
 const denemeObject = {};
 console.log(denemeObject.constructor); //1 bu örnekteki gibi
 
 const dizi = [];
 console.log(dizi.constructor); //3
 
 const fonk = function() {}
 console.log(fonk.constructor);//3
 
 