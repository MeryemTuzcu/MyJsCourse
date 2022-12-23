// map, filter, reduce, some, every, find

//sayilar dizisindeki tek elemanlaru bul yeni diziye aktar filter
//yeni dizinin her bir elemanının karesini al başka diziye aktar map
//dizide 10 dan büyük elemanların toplamını ekrana yazdır reduce

//sayılar dizisini parametre olarak alan tek bir fnksyon olmaı ve bu fonksiyon geriye sonucu döndürsün

const sayilar = [1,2,3,4,5,6,7,8,9];
// BENİM KODUM
function sonucBul (sayilar){
    const tekSayiDizisi = sayilar.filter(function(sayi){
        return sayi % 2 ===1;
    });
    const karesiniAl = tekSayiDizisi.map(function(sayi){
        return sayi * sayi;
    });
    const ondanKucuk = karesiniAl.reduce(function(toplam, sayi){ 
    
        if(sayi> 10){ 
            return toplam = toplam + sayi;
           
    
        }else{
            return toplam;

        }
        
    },0);
    return ondanKucuk;

}

console.log(sonucBul(sayilar));

//kısa versiyon

function kisaVersiyon(sayilar){
    const sonuc = sayilar.filter(function (sayi){
        return sayi % 2 !==0;
    }).map(function(sayi){
        return sayi * sayi;

    }).reduce(function(genelToplam, sayi){
        if(sayi>10){
            return genelToplam = genelToplam + sayi;
        }else{
            return genelToplam;
        }
    }, 0);
    console.log(sonuc);
}

kisaVersiyon(sayilar);

function dahaDaKisa(sayilar){
    return sayilar.filter (sayi => sayi % 2 === 1)
    .map(sayi => sayi * sayi)
    .reduce((genelToplam, sayi) => sayi > 10 ? genelToplam += sayi : genelToplam, 0);
}

kisaVersiyon(sayilar);



