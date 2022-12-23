// person kurucu fonksiyon

function Person(ad, soyad){
    this.ad = ad;
// this ile yazılanlar tanımladığımız objenin propertyleri oluyor, yanındakiler ise eklenecek olanların parametreleri
    this.soyad = soyad; 
}


Person.prototype.selamVer = function(){
    return `Merhaba ben ${this.ad} ${this.soyad}`;
}




function Ogrenci(ad,soyad,yas,sinif){
    Person.call(this, ad, soyad); // kalıtım dediğimiz durum, Person kişisi olan ogrenciler aynı iki ortak degere sahiptir
    // yani ileride yeni bi öğretmenler objesi tanımlarsak tekrardan ad soyad bilgisi tanımlamak yerine person kişisinden kalıtımı
    // buradaki gibi alarak daha temiz çalışabiliriz
    this.yas = yas;
    this.sinif = sinif;

}

Ogrenci.prototype = Object.create(Person.prototype); //prototype ı da kalitim aldığımızda bu şekilde eşitlememiz lazım
//create aslında obje oluşturmak için fakat biz obje oluştur bu person prototoypeı içersin ve Ogrenciye ait prototoype a ata dedim
Ogrenci.prototype.constructor = Ogrenci; // sadece yukarıdaki olsa ogrenciye tanımladıklarımız tamamen persondakilerle aynı oluyo
// tekrardan Ogrenci objesine kendi constructorını atıyoruz

//prototypelar(miras modeli) Oluşturduğumuz objede yeni nesneler tanımladığımızda aynı değerleri olanlar için oluşturulur
// örneğin üni bilgileri aynı olsaydı da bi prototype yazabilirdik

const emre = new Person('emre', 'altunbilek'); // new dediğimizde geriye return demek zorunda kalmıyorduk çünkü yeni bir obje oluşturuyorduk, this kelimesi bir anlam kazanıyordu
const ayse = new Ogrenci('ayse','fatma' , 17 , 12);

console.log(emre.selamVer());
console.log(ayse.selamVer()); //Ogrencinin artık  persondan aldığı protoype ı var ve kullanabilecek



// KENDİ YAPIM

function MyArray(){

} 
MyArray.prototype = Object.create(Array.prototype);
const myArray = new MyArray;
myArray.push(12354); // aray [] şeklinde tanımlamadan push metodunu Arrayden miras aldığğımız prototoype ile kendi objemize de verdik.
console.log(myArray);

const dizi = [1,2,3];

const yeniDizi = dizi.map(function(sayi){
    return sayi + 2;
});

// yukarıdaki mapin miras yolu ile yapılışı



Array.prototype.kendiMapim = function(islem){ // varloan array metotlarına kendi yazdığımız yöntemi eklemiş olduk
    const yeniDizi = [];
    for(let i = 0; i < this.length; i++){
        yeniDizi.push(islem(this[i], i));
    }
    return yeniDizi;
}

const myYeniDizi = dizi.kendiMapim(function(sayi){
    return sayi + 2;
});

console.log(yeniDizi);
console.log(myYeniDizi);
