// Closure faydaları 1 Memory 2 Encapsulation


function ogrenciyiBul(id){

    const ogrenciDizisi = new Array(500).fill({ad: '', id: 0})
    .map(function(ogr, index){
        return {
            ad: 'öğrenci: ' + index,
            id: index
        }
    });
    console.log('dizi oluşturuldu ve de dolduruldu');
    return ogrenciDizisi[id];
}

console.log(ogrenciyiBul(5)); // her seferinde yeniden dizi oluşturup id ile sorguladığımızda yeni oluşan bir iziden veri çekiyo 




function ogrenciIslemleri(){
    const ogrenciDizisi = new Array(500).fill({ad: '', id: 0})
    .map(function(ogr, index){
        return {
            ad: 'öğrenci: ' + index,
            id: index
        }
    });
    console.log('dizi oluşturuldu ve de dolduruldu');
    function ogrenciyiBul(id){
        return ogrenciDizisi[id];
    }

    function ogrenciyiSil(id){
        return ogrenciDizisi[id];
    }

    function ogrenciyiGuncelle(id){
        return ogrenciDizisi[id];
    }
    return {
        bul: ogrenciyiBul,
        sil: ogrenciyiSil,
        guncelle: ogrenciyiGuncelle 
        //güncelle objesini dışarıdaki insanlar tarafından kullanılmasını istemeyeip yorum satırına lırsam hata yapmış olurum
        //buna da encapsulaiton denir
        //örneğin ben dışarıya bir proje yapıyorum ve bu fonksiyonları tek tek yazmak yerine tek bir fonksiyon içerisinde erişime sunabiliyorum
        // yazdığım 50 fonksiyonu kullanıma sunmanın bir yararı olmaz tek seferde sunmam daha kuıllanışlılık sağlar
    };
}

//const bul = ogrenciIslemleri();
//console.log(bul(50));
//console.log(bul(6));
//console.log(bul(7));
//console.log(bul(10));
//console.log(bul(100));// memory örneği
// burada diziyi tek sefer oluşturup id ile sorguladığımızda bir hafıza yorgunluğu yaşatmamış oluyoruz closure sayesinde


 const islemler = ogrenciIslemleri();
 console.log('bul' , islemler.bul(5));
 console.log('sil',islemler.guncelle(50));
 console.log('güncelle',islemler.sil(1));

 

 let db; 
 
 function birKereCalistir(){
    let counter = 0;
    return function(){
        if(counter> 0){
            console.log('fb bağlantısı zaten yapıldığı için işlem yapılmayacak')
            return;
        }else{
            counter++;
            db = 'bağlanıldı';
            console.log('db bağlantısı yapıldı');
        }
    }
 }

const initialize  = birKereCalistir();
initialize();
initialize();