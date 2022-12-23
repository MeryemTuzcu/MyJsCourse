//closure örnek 1
//closure için çoğunlukla bir fonksiyon içeririnde fonksiyon oluşturulur
const sayilariTopla = () => {
    console.log('fonksiyon başladı');
    const a = 20, b= 30;
    const topla = () =>{

        console.log('toplam:'+ (a+b));

    }
    setTimeout(topla, 2000);
    //return topla;
    console.log('fonksiyon bitti');

}

//sayilariTopla()();  return topla; olsaydı sayilaritopla içerisinde artık topla var bu yüzden içerisindeki fonksiyona erişebilmek için böyle yazdık
 sayilariTopla(); // fonksiyon çalış- bitti- 2 saniye sonra değerlein toplamını ekrana bastırdı


 //closure örnek 2


 const sayacIslemleri = () => {
    console.log('fonksiyon başladı');

    let sayac = 0;
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');

    h1.addEventListener('click', ()=>{
        sayac++;
    console.log('arttır:'+ sayac);

    });

    h2.addEventListener('click', ()=>{
        sayac--;
        console.log('azalt:'+ sayac);

    });
    console.log('fonksiyon bitti');
 }

 sayacIslemleri(); // fonksiyon başladı bitti yazıyor ve başlıklara tıklamama rağmen sayac değeri, arttır azalt şeklinde ekrana yazdırılıyor
 

 // closure örnek 3 

 const hesapMakinesi = (s1, s2) => {
    function topla(){
        console.log('toplam' + (s1+s2));
    }

    function carp(){
        console.log('carpim'+ (s1*s2));
    }
    return{
        topla: topla, // key ve value değerleri aynı oalcağı için aşağıdaki gibi de yazılabiliyor
        carp
    }
 }

 const uygulama = hesapMakinesi(9,10); //şurada başladı bitti fonksiyon fakat
 uygulama.topla(); 
 //ben içindeki fonksiyonu tekrar çalıştırıp, parent fonkdiyona verdiğim değerlere tıphı hafizadan ulaşıyormuş gibi erişebilir işlem yaptırabiliyorum
 uygulama.carp();
 console.log(uygulama);

 // closure örnek 4

 function kronometreUygulamasi(){
    let baslangicZamani = Date.now();
    console.log('Başlangıç Zamanı: ' +  baslangicZamani);

    function neKadarSurdu (){
        let gecenZaman = Date.now() - baslangicZamani;
        console.log('geçen zaman: ' + gecenZaman + ' milisaniyedir');
    }
    return neKadarSurdu;
 }

 const kronometre = kronometreUygulamasi();

 for(let i =0; i<500000000; i++){
    let gecici = Math.random() * 50000;
 }
 kronometre();
