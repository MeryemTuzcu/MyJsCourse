

let deger;

deger = window;

deger = window.document; // Dom = web sayfası dökümanını object halinde modelleyip bize gösteren yapı
deger = document.all;
// deger = document.all.length; // html dosyamdaki itemlerin adeti
deger = document.head;
deger =document.body;
deger = document.domain;
deger = document.URL;
deger = document.contentType;

deger = document.forms[0].id;
deger = document.links[1].className;
deger = document.links[2].classList;
deger = document.images[0].src; // document.images[0].getAttribute('src'); aynı şey

console.log(deger);
/*
let dizi = Array.from(deger);
 
dizi.forEach(element => {
    console.log(element);
});
console.log(dizi);  */

//forach array gibi ama tam kullanabilmek için kullanacağımız objeyi çevirip öyle kullanıyoruz






