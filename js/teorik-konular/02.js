// 1 Implicit binding ===> fonksyionun çağrıldığı noktanın solonunda ne varsa this onu temsil eder.

//object literal
const meryem = {
    ad: 'meryem',
    yas: 30,
    adimiSoyle: function(){
        console.log(this);
        console.log(this.ad);
    },
    yasimiSoyle(){
        console.log(this);
        console.log(this.yas);
    }
}

const enes = {
    ad: 'enes',
    yas: 30,
    adimiSoyle: function(){
        console.log(this);
        console.log(this.ad);
    },
    yasimiSoyle(){
        console.log(this);
        console.log(this.yas);
    },
    sevgili:{
        ad:'meryem',
        sevgiliAdiniSoyle(){
            console.log(this);
            console.log(this.ad);

        }
    }
}
// burada öğrenciden fonksyionlaeı çağırarak ogrenci içerisindeki fonksyionlarda belirtilen this'in ogrenci değerini aldığını anlıyoruz
// bu durumda this ise Implicit Binding'e giriyor
meryem.adimiSoyle(); // fonksiyonun solundaki noktadan sonra yazılan değeri this belirtir.
enes.yasimiSoyle(); //YANİ ben bu fonksiyonun içerisinde bir this kullanacaksam , bu değer ogrenciyi belirtir


const adSoyle = meryem.adimiSoyle; // aynı fonksiyon ama bu sefer window objesini gösteriyor
//windowda da this.ad arayıp bulamıyor
// Belirteceğimiz kurallar dışında this her zman windows temsil eder bu durumdaki gibi
//çünkü sağında solunda bi kurala uyan durum yok
//ogrenci.adSoyle() ya da bunun da  solunda da bir obje olmadığı için this windowu gösteriyor
adSoyle(); //undefined veriyor

enes.sevgili.sevgiliAdiniSoyle(); // sevgiliAdiniSoyle içerisinde bulunan this sevgili objesini temsil ediyor
//ad:'meryem tanımlı olmasaydı undefined verecekti

const fonk = enes.sevgili.sevgiliAdiniSoyle;
fonk(); //undefined


