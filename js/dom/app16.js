 // TEKLİ ELEMAN SEÇİMLERİ NASIL YAPILIR 
 console.log(document.getElementById('baslik'));
 console.log(document.getElementById('baslik').className);
 
 const baslik = document.getElementById('baslik');
 
 baslik.style.backgroundColor = 'red'; // js'de farklı ir yazım şekli ile bu tarz değişimler yapabiliyoruz
 
 baslik.style.color = 'white';
 
 baslik.style.padding ='2rem';
 baslik.textContent = 'Bu yeni baslik';
 
 const test = baslik.textContent;
 
 console.log(test); // okuma şekli
 
 baslik.innerText = 'Bu yazıyı innerText ile değiştirdik'; //başlık bu şekilde de değişir
 baslik.innerHTML =' <img src="https://picsum.photos/200" alt=""> '; // böyle de içine bir görsel vs eklemesi yapılabilir
 
 console.log(document.querySelector('h2')); // query id ye göre mi vs kontrolü gerekmeden her şeyi içine yazdırmayı sağlar daha kullanışlı
 console.log(document.querySelector('#liste')); // 
 console.log(document.querySelector('.liste-item')); // bu durumda birsürü li olsada en baştaki gelir
 console.log(document.querySelector('ul li')); // bu durumda birsürü li olsada en baştaki gelir
 console.log(document.querySelector('.link.link-facebook')); // bu durumda birsürü li olsada en baştaki gelir
 
 const myListe = document.querySelector('li');
 myListe.style.color = 'blue';
 
 document.querySelector('li:last-child').style.color = ' yellow';
 document.querySelector('li:nth-child(2)').style.color = ' orange';
 document.querySelector('li:nth-child(3)').style.color = ' purple';
 
 document.querySelector('li:nth-child(odd)').style.backgroundColor = ' black'; // tek haneli olan ilk elemanı değiştirir
 document.querySelector('li:nth-child(even)').style.backgroundColor = 'grey'; // çift haneli olan ilk elmanı değiştirir