const myForm = document.querySelector('#form');

const isim = document.querySelector('#ad');

const sehirler = document.querySelector('#sehir');




myForm.addEventListener('submit', eventiYakala);

isim.addEventListener('keydown', eventiYak); // klavyede basıldığıonda konsolda çalışıyo

isim.addEventListener('keyup', eventiYak); // klavyeden el çekilince çalışıyo
isim.addEventListener('keypress', eventiYak); // basıp çektikçe sayıyo
isim.addEventListener('focus', eventiYak); // değer yazmak istenilidğinde tetikleniyo
isim.addEventListener('blur', eventiYak); // alandan çıkıldığında tetikleniyo

isim.addEventListener('cut', eventiYak); // yazıyı kesildiğinde tetikleniyo

isim.addEventListener('paste', eventiYak); // ctrl v ile yapıştırınca tetikleniyo

isim.addEventListener('input', eventiYak); // yukarıdaki tüm olaylarda tetikleniyı


sehirler.addEventListener('change' , eventiYak);
function eventiYakala(e){
    console.log(isim.value);
    document.querySelector('.link').textContent = isim.value; // submit edilen değeri ekrandaki <a ya yazıyor 
    console.log('Event adı:' + e.type); // gönder butonunun tipini bize söylüyor
    e.preventDefault();
}

function eventiYak(e){
    console.log(e.target.value);
    console.log('Event:' + e.type); 

    e.preventDefault();
}