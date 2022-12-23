//Js de Object Orianted'dır fakat java gibi değil
//OOP bir aile ise class based onun bir parçasıdır. Prototoype-base gibi


class Person {

    static sayac = 0;

    constructor(ad, soyad){
        this.ad = ad;
        this._soyad =soyad; // java vs gibi dillerdeki kapsülleme mantığı içinyapışmış normalde private anlamına geliyor
        Person.sayac++;

    }


    get soyadGet(){ 
        // normalde console.log dan soyad bilgisine ulaşılmak istenildiğinde izin vermez
        // ama bu
        return this._soyad;
    }

    set soyadSet(yeniSoyad){
        this._soyad = yeniSoyad;
    }


    selamVer(){
        return `Merhabalar ben ${this.ad + ' ' + this.soyad}, `;
    }
    static test(){
        console.log(' ben staticim');
    }
    
}






class Ogrenci extends Person{ // yeni oluşturuduğum ogrenci objesi persondan kalitim alıyor

    constructor (ad, soyad, sinif) { // bu şekilde de 
        super(ad, soyad);
        this.sinif = sinif;
    }
    sinifiniSoyle(){
        return `${this.sinif}. sınıfa gidiyorum.`;
    }
    //Persondaki fonksiyonu beğenmezsem burada tanımlayıp miras aldığımı ezip yenisini kullanadabilirm
        
    selamVer(){
        return `Merhabalar ben ${this.ad + ' ' + this.soyad}, bunu istiyorum `; 
    }
}

const meryem = new Person('meryem', 'tuzcu');
meryem.soyadSet = 'şatır';
console.log('yeni soyad:' + meryem.soyadGet);
console.log(meryem.selamVer());

const enes = new Ogrenci('enes' , 'şatır', 16);

console.log(enes.selamVer() + enes.sinifiniSoyle());

console.log('oluşturulan personel sayısı: ' + Person.sayac);

Person.test(); // Math.random() aynı yapı aynı mantık var olan sınıftaki metotu kullanıyoruz.

