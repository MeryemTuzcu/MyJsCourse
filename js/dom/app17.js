 // ÇOKLU ELEMAN SEÇİMLERİ NASIL YAPILIR 

 const linkler = document.getElementsByClassName('link');

 console.log(linkler);

 console.log(linkler[0]);
 console.log(linkler[2]);

 linkler[0].style.color = 'red'; //style.backgroundcolor, textContent vs de değişiklir yapılabilir
console.log(document.querySelector('ul').getElementsByClassName('liste-item'));

const listeElamanlarim =document.getElementsByTagName('h1'); 
console.log(listeElamanlarim);

const dizi = Array.from(linkler);  // aşağüıda daha kolay örneği var
dizi.reverse();
dizi.forEach(item =>{
    console.log(item);
});

const linkListesi = document.querySelectorAll('a'); // ().link ile de yapabilirdim yada li yazıp tüm şehirleri de listeyebilirdim)a listesinin hepsini bi consta atamadan queryselectorAll ile de çağırabilirim

console.log(linkListesi);

const sehirlerTek = document.querySelectorAll('li:nth-child(odd)'); // 2-2 vs de yazabilirdim odd tek demekti
const sehirlerÇift = document.querySelectorAll('li:nth-child(even)'); // 2-2 vs de yazabilirdim odd tek demekti

// sehirlerTel gibi fazla değer verenlere normal yazışla şekil değişikliği yapamıyoruz o yüzden alttakini kullanıyoruz

sehirlerTek.forEach(item =>{    // bunu for ile de yapabilirz aşağıda örneği var
    item.style.backgroundColor = '#ccc';
});

for(let i = 0; i< sehirlerTek.length; i ++){
    sehirlerÇift[i].style.backgroundColor = '#eee';
}

