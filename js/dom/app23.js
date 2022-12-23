// local ve session storage
/* localStorage.setItem('ad', 'emre'); // sadece string değer tutulabiliyor
localStorage.setItem('yas', '32'); // bunları yoruma alıp webte bakarsam localde hala durduklarını görürüm ama sess,onda görmem
 
sessionStorage.setItem('il', 'ankara'); // sessionda tutuluyor bu

console.log(localStorage.getItem('ad')); // kosnola emre ismini yazdırdık

localStorage.removeItem('yas'); // localden yaşı sildi

localStorage.clear(); // bütün metotları siliyor */
const ulLiatesi = document.querySelector('.liste');

const isimDizisi = JSON.parse(localStorage.getItem('isimListesi'));

if(isimDizisi != null){
    isimDizisi.forEach(function(isim){
        const yenili = document.createElement('li');
        yenili.textContent = isim; 
        ulLiatesi.appendChild(yenili);
    });

}


document.querySelector('#form1').addEventListener('submit' , function(e){
    const yeniIsim = document.querySelector('.isim').value;
    let isimDizisi;
    if(localStorage.getItem('isimListesi')=== null){

        isimDizisi = [];

    } else{
        isimDizisi = JSON.parse(localStorage.getItem('isimListesi')); 
    }

    isimDizisi.push(yeniIsim);
    localStorage.setItem('isimListesi', JSON.stringify(isimDizisi));    
    const yenili = document.createElement('li');
    yenili.textContent = yeniIsim; 
    ulLiatesi.appendChild(yenili);
    e.preventDefault;
});