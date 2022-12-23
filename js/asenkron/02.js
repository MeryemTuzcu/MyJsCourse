
//promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //console.log('3 saniyelik işlem bitti');
        //resolve({ad: 'emre, id: 1});
        //resolve('3 saniyelik işlem bitti');  resolve kısmına işlem başarıyla bittiği bildiririz
        reject('internete çıkamadım'); // hata durumları için kullanılır
    }, 3000);
}); 
 // then yapısına başarılı şekilde resolve olan ne varsa onu yazıyoruz
 //catch yapısına hataları yakalamak için yazıyoruz
myPromise 
// bu yapı sayesindeuzun süren işlemlerin başarılı başarısız durumlarını istediğimiz işlemi yaptırdık 
    .then(sonuc =>{console.log(sonuc);})
    .catch(hata =>{console.log(hata);});

    


    function ogrencileriGetir(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=> { 
                const dizi = [];
            
                for(let i =0; i < 300; i++){
                    dizi.push({ad: 'öğrenci: ' + (i+1), id: i+1});
                }
        
                //resolve(dizi);
                reject('hata çıktı')
            }, 2000);
        });
    }
function ogrencileriYazdir(dizi){
    console.log(dizi);
}
ogrencileriGetir()
    .then(ogrenciDizisi=> ogrencileriYazdir(ogrenciDizisi)) // bir sürü then  yazınca hata mesajını yakalamk için catch işimize yarıcak

    .catch(hataMesajı => console.log(hataMesajı));


    // bu şekilde tek satırdan promise lazımsa kullanılabilir
const promiseBasarili = Promise.resolve('Başarılııııııııııııı');
const promiseHatali = Promise.reject('OLMADI OLMADI');

promiseBasarili.then(snc=> console.log(snc));
promiseHatali.catch(sonuc => console.log(sonuc));

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>  {
        resolve('2 saniye başarıyla sonuçlandı');
    }, 2000);
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>  {
        resolve('3 saniye başarıyla sonuçlandı');
    }, 3000);
});

Promise.all([p1,p2]).then(sonuc => console.log(sonuc)); // ikside bittikten sonra yani 3 saniye sonra çalıştırıyo

Promise.race([p1,p2]).then(sonuc => console.log(sonuc)); // hangisi daha önce biterse onu ekrana yazdırıyo