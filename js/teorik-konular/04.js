/* //arrow functionlarda this kullanımı

function fonksiyon1(){
    console.log(this);
}

//burada bahsettiğimiz hiçbir kural olmasasından ötürü this bize windowu verdi
fonksiyon1();


const fonksiyon = () => {
    console.log(this);
}
//burada thisin window verme sebebi ise thisi tanımlayan bir şey var mı fonksiyonun içerisinde yok
//bu yüzden parent a yani globale bakıyor ve burada bulunan this window aulaştığı için bize window veriyor
fonksiyon();



const emre = {
    ad:'emre',//metot tanımlarda arrow function kuulanılmaz!
    adiniSoyle:() =>{
        console.log(this);
        console.log(this.ad);
    }
}
emre.adiniSoyle(); // burada kural olsada this windowu gösterir
//arrow function sebebiyle adinisöylede yer alan this gösterdiği emre değerini bulamaz bir üst parenta bakar ve window göndeir

  */

/* const okul = {
    isimler:['emre', 'hasan', 'ali'],
    idler: [24341,42342,3542],
    ogrencileriYazdir(){
        const that = this;
        this.isimler.forEach(function(isim , index){
            //console.log(this);
            console.log(isim, that.idler[index]); //böyler olunca kodumuz patlıyor ve this objeleri göstermiyor bizde that kullanıyoruz
        });
    },
    idleriYazdir(){
        this.idler.forEach(function(id,index){
            console.log(id);
            console.log(this); 
        }.bind(this)); // bu sayede this ogrenciyi temsil ediyor
    },
    ogrenciSayisiniVer(){
        setTimeout(()=> {
            console.log(this); // iç içe yapılarda arrow  işe yarar ve this istenilen değeri işaret eder
            console.log('toplam öğrenci sayısı:'+this.isimler.length);
        }, 2000);
    }
}
 */
//kul.ogrencileriYazdir();
//okul.idleriYazdir();
//okul.ogrenciSayisiniVer();

/* const bas1 = document.querySelector('h1');
const bas2 = document.querySelector('h2');
const bas3 = document.querySelector('h3');

bas1.addEventListener('click' ,function(e){
    e.preventDefault;
    console.log(this);
});
const sayi = 20;
bas2.addEventListener('click', baslikTiklandi);

function baslikTiklandi(e){
    //e.preventDefault;
    console.log(e.target);
    console.log(this);
    console.log(sayi); 
}
 */

class Ekran{
    constructor(){

        this.baslik1 = document.querySelector('h1');
        this.baslik2 = document.querySelector('h2');
        this.baslik3 = document.querySelector('h3');
        this.sayi = 10; 
   
        this.baslik1.addEventListener('click', this.baslikTiklandi.bind(this));
            
    
        this.baslik2.addEventListener('click', ()=> {
            this.baslik2Tiklandi();
        });
        
        this.baslik3.addEventListener('click', function(){
            console.log(this);
        });
    }
    baslikTiklandi(){
        console.log('çalıştı');
        console.log(this);
        console.log(this.sayi)
        // erişemiyor bu yüzde baslik! eventinde bind(this) kullanarak fonksiyon içerisinde this ile objeye erişmek istediğimde
        //constructora ulaş ve bana sayiyi ver demiş oluyorum

    }
    baslik2Tiklandi(){
        console.log('çalıştı');
        console.log(this); // yukarıda kullandığımız arrow function sayesinde bütün const elemanları çağırabildik

    }
}

const ekran = new Ekran();