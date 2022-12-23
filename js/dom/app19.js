const yeniListeElamani = document.createElement('li');
yeniListeElamani.className = 'liste-item';
yeniListeElamani.textContent = ' Yozgat';
yeniListeElamani.id = 'yeni-id';
yeniListeElamani.setAttribute('deger' , 'yeni-deger');

document.querySelector('ul').appendChild(yeniListeElamani);  // listenin sonuna verdiğimiz özelliklerde elemanı ekledik
console.log(yeniListeElamani);

document.querySelector('h2').textContent = 'dedem'; // varloanı değştiriyo

//replace

const yeniKucukBaslik = document.createElement('h6');

const eskiBaslik = document.querySelector('h2');
const baslikParent = document.querySelector('body');

baslikParent.replaceChild(yeniKucukBaslik, eskiBaslik);

yeniKucukBaslik.id = 'h6ID';
yeniKucukBaslik.textContent = 'Yeni Başlık';
 
console.log(yeniKucukBaslik);

//remove
const listeItem = document.querySelector('li'); // ilk baştaki elemanı sildi
listeItem.remove();
// document.querySelector('ul').remove(); bütün li değerli ul içerisinde olduğu için silindiler.

document.querySelector('ul').removeChil(document.querySelectorAll('li')[3]); // 3. indexteki değeri sildirdik

const textBolumu = document.querySelector('input'); // consta atayarak da silme işlemi yapılabilir
document.querySelector('form').removeChild(textBolumu);
console.log(listeItem);



