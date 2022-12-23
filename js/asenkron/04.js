
// fetch ile serverdaki dosyaları okuma

const btnTextGetir = document.getElementById('btn-text-getir');
const btnJsonGetir = document.getElementById('btn-json-getir');
const btnApidenJsonGetir = document.getElementById('btn-apiden-json-getir');
const btnJsonEkle = document.getElementById('btn-json-ekle');



btnTextGetir.addEventListener('click', getText);
btnJsonGetir.addEventListener('click', getJson);
btnApidenJsonGetir.addEventListener('click', getJsonFromApi);
btnJsonEkle.addEventListener('click', jsonVeriEkle);




const sonucDiv = document.getElementById('sonuc');


function getText(e) {
    e.preventDefault();

    fetch('04.txt')
        .then(response => response.text()) // xml mi json mı dosyam bilmediğim için dosyayı text metotu ile  okuyup cevabıma atıyorum
        .then(sonuc => sonucDiv.innerText = sonuc) // promise e ulaşabilmek için sonuca atıyorum
        .catch(hata => console.log(hata));// olası hata durumu
}
// normalde dosya konumunda htmli açmaya çalışırsam bana hata verir çünkü buradaki dosyalarıma erişme hakkı yoktur
// ama buradan live server ile açmam sanki bir server oluşturulmuş ve orada çalıştırıyor gibi olduğu için ben dosyamı ekrana yazdırabiliyorum
// bu yüzden bunun çok bir kullanımı yoktur değişmeyen verilerimi json ile alıp yazdırabilirim
// Json dosyamın Js den tek farkı tanımlarımı tırnak içerisinde yapmak
function getJson(e) {
    e.preventDefault();

    fetch('ogrenciler.json')
        .then(response => response.json())
        .then(sonuc => {
            let cikti = '';
            sonuc.forEach(ogr => {
                cikti += `ogrenci adi ${ogr.ad} id: ${ogr.id} \n`
            })
            sonucDiv.innerText = cikti
        })

}

function getJsonFromApi(e) {
    e.preventDefault();


    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(sonuc => ekranaYazdir(sonuc))
}

function ekranaYazdir(data) {
    let cikti = '';
    data.forEach(user => {
        cikti += `<li>${user.name}</li>`
    });
    sonucDiv.innerHTML = cikti;
}

/* function jsonVeriEkle(e) {

    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alanı', //normalde forma ekleriz ama örnek olsun diye apiye ekleme yapıyoruz
            userId: 5
        }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(sonuc => console.log(sonuc));
}
 */

// async function ile aynı işlem
async function jsonVeriEkle(e) {
    e.preventDefault();

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alanı', //normalde forma ekleriz ama örnek olsun diye apiye ekleme yapıyoruz
            userId: 5
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    const sonuc = await response.json();
    console.log(sonuc);
}