const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const deleteBtn = document.getElementById('delete');
const ayniAndaIstekBtn = document.getElementById('ayni-anda-istek');
const headersBtn = document.getElementById('headers');
const hataBtn = document.getElementById('hata');


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putPatchBtn.addEventListener('click', putPatchData);
deleteBtn.addEventListener('click', deleteData);
ayniAndaIstekBtn.addEventListener('click', ayniAndaIstekData);
headersBtn.addEventListener('click', customHeader);
hataBtn.addEventListener('click', hataIslemleri);


function getData() {
    /*  1. YÖNTEM GİBİ DÜŞÜNEBİLİRİZ
         axios({
         method: 'GET',
         url: 'https://jsonplaceholder.typicode.com/users',
         params:{
             _limit:2
         }
     }).then(response => sonucEkranaYazdir(response))
         .catch(hata => console.log(hata))
         .then(()=>console.log('get isteği tamamlandı')) */
    /* 2. YÇNTEM 
        axios
        .get('https://jsonplaceholder.typicode.com/users', {
            params:{
                _limit: 1
            }
        })
        .then(response => sonucEkranaYazdir(response))
        .catch(hata => console.log(hata))
        .then(() => console.log('get isteği tamamlandı'))*/
        axios
        .get('https://jsonplaceholder.typicode.com/users?_limit=1') // query parametre sadece bir tane getir
        .then(response => sonucEkranaYazdir(response))
        .catch(hata => console.log(hata))
        .then(() => console.log('get isteği tamamlandı'))
} 

function postData() {
   /*  axios.post('https://jsonplaceholder.typicode.com/posts',{
        title: 'Yeni Başlık',
        body: 'Burası body kısmı',
        userId: 55
    }).then(response => sonucEkranaYazdir(response))
    .catch(hata=> console.log(hata)) */

    axios.post('https://jsonplaceholder.typicode.com/users',{ // veritabanına kayıt ediyoruz
        id: 800,
        name:' emre altunbilek',
        username:'altnblk'
    }).then(response => sonucEkranaYazdir(response))
    .catch(hata=> console.log(hata))
}

function putPatchData() {
   /*  axios.put('https://jsonplaceholder.typicode.com/users/1',{ // request parametresi idsi bir olan useri değiş
        email: 'ldsfjas@gmail.com',
        name:' emre altunbilek',
        username:'altnblk'
    }) .then(response => sonucEkranaYazdir(response))
    .catch(hata=> console.log(hata)) */
    axios.patch('https://jsonplaceholder.typicode.com/users/1',{  // patch ile yapılınca güncellediğimizveri silinmeden güncelliyo
        name:' emre altunbilek',
        username:'altnblk'
    }).then(response => sonucEkranaYazdir(response))
    .catch(hata=> console.log(hata))
}
function deleteData(){
    axios.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(response => sonucEkranaYazdir(response))
    .catch(hata=> console.log(hata))
}

//ayndan get ve post yapmak istiyoruz ve bunu kullanırız
function ayniAndaIstekData() {
   /*  axios.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts')
    ]).then(response=>{
        console.log(response[0].data);
        console.log(response[1].data);
        sonucEkranaYazdir(response[0]); // usersları ayrıca ekrana yazdıralım dedik

    }) */ 

    //bu daha okunaklı
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts'),
    ]).then(axios.spread((kullanicilar,postlar)=>{
        console.log(kullanicilar.data);
        console.log(postlar.data);
        sonucEkranaYazdir(kullanicilar);
    }))
}





// bu metot bize butonlara tıkladığımızda consoldaki ekrana veriler gelmeden silinmeden(request-istek)vs önce yaptırdığımız işlemin bilgisini veriyor
axios.interceptors.request.use(config=>{
    console.log(`${config.url} adresine ${config.method} isteği yapıldı ve timeout olarak ${config.timeout} ayarlandı`);
    return config;
});

axios.interceptors.response.use(response=>{
    return response;
}, error=>{
    return Promise.reject(error);
});

axios.defaults.headers.common['X-Auth-Token'] = 'apitokendegeri';

//uygulamanın her yerinde bir axios kullanacaksam bu şekilde oluşturup header alanında kullanabiliyorum
const axiosNesnesi = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {'X-Requested-With':'XMLHttpRequest', 'token': 'dkflsaskaf'} // türkçe değer almamalı bu token
})
//kimin yetkili olup olmadığını anlamak için yapabiliri
function customHeader() {
    
    axiosNesnesi.get('/users').then(response => console.log(response));
    
    const config ={
        headers:{
            'Content-Type': 'application/json',
            Authorization: 'sizintokendegeriniz'
        }
    }
    axios.post('https://jsonplaceholder.typicode.com/users',{ // veritabanına kayıt ediyoruz
        email: 'emre@bey.com',
        name:' emre altunbilek',
        username:'altnblk'
    }, config).then(response => sonucEkranaYazdir(response))
    .catch(hata=> console.log(hata))
}


function hataIslemleri() {
    axios('https://jsonplaceholder.typicode.com/users?_limit=1') // query parametre sadece bir tane getir
        .then(response => sonucEkranaYazdir(response))
        .catch(hata => hatayiYazdir(hata))
        .then(() => console.log('get isteği tamamlandı'))
}

function hatayiYazdir(hata) {
   
    document.querySelector('.sonuc').innerHTML = `
    <div class="notification is-info">
    <div class="columns is-mobile is-centered">
        <div class="column"><h1 class="subtitle">Sonuc</h1></div>
        <div class="column"> <h1 class="title">
        <pre>${JSON.stringify(hata.response, null, 4)}</pre></h1></div>
    </div>
    </div>`;
}

function sonucEkranaYazdir(response) {
    document.querySelector('.sonuc').innerHTML = `
    <div class="notification is-info">
    <div class="columns is-mobile is-centered">
        <div class="column"><h1 class="subtitle">Sonuc</h1></div>
        <div class="column"> <h1 class="title">${response.status}</h1></div>
    </div>
    </div>
    
    <div class="section">
    <article class="message is-success">
        <div class="message-header">
        <p>Header</p>
        </div>
        <div class="message-body has-background-white has-text-dark">
        <pre>${JSON.stringify(response.headers, null, 4)}</pre>
        </div>
    </article>
</div>

<div class="section">
<article class="message is-warning">
    <div class="message-header">
      <p>Data</p>
    </div>
    <div class="message-body has-background-white has-text-dark">
    <pre>${JSON.stringify(response.data, null, 4)}</pre>
    </div>
  </article>
</div>

<div class="section">
<article class="message is-primary">
    <div class="message-header">
      <p>Config</p>
    </div>
    <div class="message-body has-background-white has-text-dark">
    <pre>${JSON.stringify(response.config, null, 4)}</pre>
    </div>
  </article>
</div>`;
}


