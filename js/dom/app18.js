const myListe = document.querySelector('ul.liste'); // birden fazla ul varsa class adı ul olanları bu şekilde getiririz
console.log(myListe);
deger = myListe.childNodes; // bu şekilde text, li yorum satırı vs bilgisi de geliyor sadece element(li vs) için aşağıdaki gibi yapabiliriz
deger = myListe.childNodes[0].nodeType; //textin sayı karşılığı kodda 3, elementin 1, yorumun 8
deger = myListe.firstChild; //text döner

deger = myListe.firstElementChild; // şimdi ilk li döner lastelemantchild son elementi döner
deger = myListe.childElementCount; //listede toplam element eleman sayısını verir



//parent element
deger = myListe.parentNode;

deger = myListe.parentElement.parentElement;

deger = document.querySelector('li').nextElementSibling.previousElementSibling.previousElementSibling; //birinci elemant olan bursanın komşunu yani ankara değerini bize verir
console.log(deger);

const myInput = document.querySelector('input'); // inputun parenti formu bilgisini bize verir.
console.log(myInput.parentElement);


