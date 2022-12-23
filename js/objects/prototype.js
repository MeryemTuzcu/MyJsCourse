
//prototype property
// Js prorotype miras modelini kullanır
// her constructor function/class aynı kurucu fonksiyonla oluşturulan instance'ların ortak olarak kullanabilecekleri
//prototype isimli propertye sahiptir. Prototoype property de bir nesne döndürür.

//ortak olanlar bilgilerigoster fonksiyonu ve ege üni bu sebele prototype tanımladık

Ogrenci.prototype.okul = 'ege üniversitesi';
Ogrenci.prototype.bilgileriGoster = function (){
        return `ismim ${this.isim} yaşım ${this.yas} ve okulum ${this.okul}`;
    }


function Ogrenci(ad, yas, evliMi, okul){
    this.isim = ad;
    this.yas = yas;
    this.evliMi = evliMi;

}
const emre = new Ogrenci('emre',32,false);
const hasan = new Ogrenci('hasan',20,false);

console.log(emre.bilgileriGoster());
console.log(emre.constructor.prototype); //emre nesnesinin consın aldığı miras olan prototoype nedir ekrana yazdırabiliyoruz
console.log(Object.getPrototypeOf(hasan));//bu da aynı şey


const dizi = [1,2,3];
const dizi2 = [12,23,34];
console.log(dizi.constructor.prototype);
dizi.push(1);

const isim = 'emre';

console.log(typeof isim);
console.log(isim instanceof Object);// false dedi çünkü primitive tip

const isimm = new String('emre');
console.log(typeof isimm);