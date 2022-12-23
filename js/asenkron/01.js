console.log('başladı');

//ogrencileriGetir(ogrencilerYazdir); aşağıdaki ile aynı şey sadce fonksiyonu çağırmayı anlamak adına tekrar yazdık

ogrencileriGetir(function(ogrenciDizisi){ // parametre olarak bir fonksiyon geçtik 
    console.log(ogrenciDizisi); // 
});

console.log('bitti');


function ogrencileriGetir(callback){
//internet üzerinden uzun süren verileri çekmek için kullanuyoruz diyebiliriz
    setTimeout(function(){ 
        const dizi = [];
    
        for(let i =0; i < 300; i++){
            dizi.push({ad: 'ogrenci: ' + (i+1), id: i+1});
        }

        callback(dizi);
    }, 3000);
}


function ogrencilerYazdir(ogrenciDizisi){
    console.log(ogrenciDizisi);
}

