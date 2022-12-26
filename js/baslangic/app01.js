console.log("Hello")

let myAge = 21;
console.log(myAge);
console.error("Yanlış işlem") // hata mesajı konsolda  verilir
console.warn("Şifre daha uzun olmalı") // uyarı mesajı
console.clear(); // üstteki bütün işlemlerden sonra konsolu siler

console.table({name: 'Emre', age: 30}); // tablo görüntüsü oluşturma

console.time(); // ikisi arasına yazılan kodların çalışma süresini ekrana yazdırır
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")
console.log("Hello")

console.timeEnd();
console.clear(); 

//Shift+ alt+ a ile tümünü seçip yorum satırı
 
//let girilenSayi = prompt("Bir \'incinin değerini Giriniz"); // ters slash yazı içindeki karakterin kod sayılmaması için
//console.log(girilenSayi);


 let sayi1 = 50;
 console.log(sayi1);
 console.log(typeof sayi1); // veri tipini konsola yazar

 let ondalikSayi = 2.15;
 console.log(typeof ondalikSayi);

 let isim = 'Meryem';
 let soyIsim = ' Tuzcu';
 let tamIsim = isim + ' ' + soyIsim; // verileri birleştirip araya boşluk ekleme

 console.log(tamIsim);
 let tamIsim2 = `${isim} ${soyIsim}`; // böyle de arasına boşluk koyabiliriz

 console.log('template literal: ' + tamIsim2 );

 console.log(`template literal ile bütün yazdır: ${tamIsim2} `);
 let asalSayiMi = true;
 console.log(`Veri Türümüzün Değeri ${asalSayiMi} veritipi: ${ typeof asalSayiMi}`);


let color;
console.log(color); // bir değer atanmadığı için Undefined değeri döner

let yas = null;
console.log('değer: ' +  yas + 'veri tipi: ' + typeof yas);
// Aritmetik Operatörlerde + - * / % toplama hariç diğer hepsinde string ve int değerler arasında işlemleri doğru yapar
let ornk = 10;
let ornk1 = 20;
ornk = ornk + 1 ;
ornk++; // ++ornk bir şeyi değiştiremiyor ya da---
 console.log( ' 2 numaralı ornek: ' + ornk1);
 console.log( ' 2 numaralı ornek: ' + ornk1++); // sayıyı bir arttırık ama ekrana yazdırmaz
 console.log( ' 2 numaralı ornek: ' + ornk1); // bu sefer arttırılmış numarayı yazar
 console.log( ' 2 numaralı ornek: ' + ++ornk1); // . arttırıp son halini ekrana yazdırır

 let num1 = 10;
 let num2 = 4 ;
let strng = '10';
 console.log(num1>num2); // bu ve türevleri true false değerler döner
 console.log(num2 == strng); // değerleri karşılaştırdığı için bu sonuca true dömer
 // === bu yöntem ise veri tipie de değere de bakarak kontrol sağlar

 num2 -=  num1; // ya da += vs olduğunda soldakinden sağdakini çıkar ve soldakine tekrar eşitle 
 console.log(num2);