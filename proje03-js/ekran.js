import resimGetir from "./unsplash_api.js";
import sakaGetir from "./joke_api.js";
import ceviriYap from "./translate_api.js";

class Ekran {
    constructor(){
        this.sakaGetirBtn = document.querySelector('.saka-getir-button');
        this.sakaGetirBtn.addEventListener('click', ()=> this.sakaGetir());
    }

    async sakaGetir(){
        const rastgeleResim = await new  resimGetir();//UnsplashApi().randomResimGetir();
        const rastgeleSaka = await new sakaGetir();//JokeApi().randomSakaGetir();
        const ceviri = await new ceviriYap();//TranslateApi(rastgeleSaka).ceviriYap();
        const tumSonuclar = {
          rastgeleResim,
          rastgeleSaka,
          ceviri
        }
        //console.log('tıklandı');
        this.ekranaSonuclariYazdir(tumSonuclar);
    }
    ekranaSonuclariYazdir(sonuclar){
        document.querySelector('.sonuc').innerHTML = `<div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${sonuclar.rastgeleResim}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            
            <div class="media-content">
              <p class="title is-4 has-text-primary pb-4">${sonuclar.rastgeleSaka}</p>
              
            </div>
          </div>
        </div>

        <div class="block"></div>

        <div class="card-content">
            <div class="media">
                <div class="media-content">
                <p class="title is-4 has-text-danger pb-4">${sonuclar.ceviri}</p>                           
              </div>
            </div>
          </div>
      </div>`
    }
} 
export default function uygulamayiBaslat(){
  new Ekran();
}