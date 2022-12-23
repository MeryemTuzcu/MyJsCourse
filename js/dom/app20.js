 // belirtilen alanın üzerinden çıktığı her bir itemi sayıyor
 document.querySelector('.container').addEventListener('mousemove' , arkaPlanRengiDegistir); // mouseun alan içerisinde hareket ettiği süre boyunca sayıyor ve yazdırıyor
 function tiklanma(e){
    let deger;

    deger = e.type; // type = eventin tipini söyler( tipi click)  .target hedefteki html kodunu bize döner .classNAme ise classını bize söyler
    console.log(deger);
    //console.log('click event'); blog sitem yazısına tıklanıldıkça kaç kere basıldığı konsolda yazdırılıyor
    e.preventDefault();
 } 
 function arkaPlanRengiDegistir(e){ // mouse alana girdiğinden itibaren p elementi alan içerisindeki x ekseninin değerini ekranda gösteriyor sürekli
    document.querySelector('.yazi').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    document.querySelector('.container').style.backgroundColor = `rgb(${e.clientX %255}, ${e.
        clientY % 255}, ${ (e.clientX + e.clientY)%255})`
   
 }