class Kisi {
    constructor(ad, soyad, mail) {
        this.ad = ad;
        this.soyad = soyad;
        this.mail = mail;
    }
}

class Util {
    static bosAlanKontrolEt(...alanlar) {
        let sonuc = true;
        alanlar.forEach(alan => {
            if (alan.length == 0) {
                sonuc = false;
                return false;
            }
        });
        return sonuc;
    }

    static emailGecerliMi(email) {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}


class Ekran {

    constructor() {
        this.ad = document.getElementById('ad');
        this.soyad = document.getElementById('soyad');
        this.mail = document.getElementById('mail');
        this.ekleGuncelleButton = document.querySelector('.kaydet-Guncelle');
        this.form = document.getElementById('form-rehber');
        this.form.addEventListener('submit', this.kaydetGuncelle.bind(this));
        this.kisiListesi = document.querySelector('.kisi-listesi');
        this.kisiListesi.addEventListener('click', this.guncelleVeyaSil.bind(this))
        //update ve delete butonların basıldığında ilgili eleman burada tutuluyor
        this.secilenSatir = undefined;
        this.depo = new Depo();
        this.kisileriEkranaYazdir();
    }

    alanlariTemizle() {
        this.ad.value = '';
        this.soyad.value = '';
        this.mail.value = '';
    }

    guncelleVeyaSil(e) {
        const tiklanmaYeri = e.target;
        if (tiklanmaYeri.classList.contains('btn--delete')) {
            this.secilenSatir = tiklanmaYeri.parentElement.parentElement;
            this.kisiyiEkrandanSil();
        } else if (tiklanmaYeri.classList.contains('btn--edit')) {
            this.secilenSatir = tiklanmaYeri.parentElement.parentElement;
            this.ekleGuncelleButton.value = 'Güncelle';
            this.ad.value = this.secilenSatir.cells[0].textContent;
            this.soyad.value = this.secilenSatir.cells[1].textContent;
            this.mail.value = this.secilenSatir.cells[2].textContent;



        }

    }

    kisiyiEkrandaGuncelle(kisi) {

        const sonuc = this.depo.kisiGuncelle(kisi, this.secilenSatir.cells[2].textContent);
        if(sonuc){

            this.secilenSatir.cells[0].textContent = kisi.ad;
            this.secilenSatir.cells[1].textContent = kisi.soyad;
            this.secilenSatir.cells[2].textContent = kisi.mail;
            this.alanlariTemizle();
            this.secilenSatir = undefined;
            this.ekleGuncelleButton.value = 'Kaydet';
            this.bilgiOlustur('Kişi Güncellendi', true);

        }else{
            this.bilgiOlustur('Yazdığınız Email Kullanımda!', false);

        }
        



    }

    kisiyiEkrandanSil() {
        this.secilenSatir.remove();
        const silinecekMail = this.secilenSatir.cells[2].textContent;
        this.depo.kisiSil(silinecekMail);
        this.alanlariTemizle();
        this.secilenSatir = undefined;
        this.bilgiOlustur('Kişi Rehberden Silindi', true);
    }

    kisileriEkranaYazdir() {
        this.depo.tumKisiler.forEach(kisi => {
            this.kisiyiEkranaEkle(kisi);
        });
    }

    kisiyiEkranaEkle(kisi) {
        const olusturulanTR = document.createElement('tr');
        olusturulanTR.innerHTML = `<td>${kisi.ad}</td>
        <td>${kisi.soyad}</td>
        <td>${kisi.mail}</td>
        <td>
            <button class="btn btn--edit"><i class="fa fa-edit" aria-hidden="true"></i> </button>
            <button class="btn btn--delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
        </td>`;

        this.kisiListesi.appendChild(olusturulanTR);
        //tumKisilerDizisi.push(eklenecekVeyaGuncellenecekKisi);

    }

    kaydetGuncelle(e) {
        e.preventDefault();
        const kisi = new Kisi(this.ad.value, this.soyad.value, this.mail.value);
        let sonuc = Util.bosAlanKontrolEt(kisi.ad, kisi.soyad, kisi.mail);
        const emailGecerliMi = Util.emailGecerliMi(this.mail.value);

        // tum alanlar doldurulmuş
        if (sonuc) {
            if (!emailGecerliMi) {
                this.bilgiOlustur('Geçerli Bir Email Adresi Giriniz!', false);
                return;
            }
            if (this.secilenSatir) {
                //seçilensatir undefined değilse , güncelle
                this.kisiyiEkrandaGuncelle(kisi);
            } else {
                //localStorage ekle
                const sonuc = this.depo.kisiEkle(kisi);
                if (sonuc) {

                    this.bilgiOlustur('Başarıyla Eklendi', true);
                    // yeni kişiyi ekrana yazdırduk
                    this.kisiyiEkranaEkle(kisi);
                    this.alanlariTemizle();


                } else {
                    this.bilgiOlustur('Bu Email Daha Önce Kullanılmış!', false);


                }



            }

        } else {
            // boş alan var
            this.bilgiOlustur('Boş Alan Bırakmayınız!', false);

        }
    }

    bilgiOlustur(mesaj, durum) {
        const uyariDivi = document.querySelector('.bilgi');
        uyariDivi.innerHTML = mesaj;

        uyariDivi.classList.add(durum ? 'bilgi--success' : 'bilgi--error');

        //setTimeout, setInterval verdiğimiz süre geçince çalıştır- verdiğimiz süre kadar çalışsın
        setTimeout(function () {
            uyariDivi.className = 'bilgi';
        }, 2000);

    }
}


class Depo {
    //*uygulama ilk açıldığında veriler getirilir.
    constructor() {
        this.tumKisiler = this.kisileriGetir(); // kisileri geti metotu ile varolanları tum kisiler dizisine ekliyo
    }

    emailEssizMi(mail) {
       const sonuc = this.tumKisiler.find(kisi => {
            return kisi.mail === mail;
        });
        if (sonuc) {
            //maili kullanan var
            return false;
        } else {

            return true;
        }
    }

    kisileriGetir() {
        let tumKisilerLocal;
        if (localStorage.getItem('tumKisiler') === null) {
            tumKisilerLocal = []; // hiç eleman yoksa localde yeni bi dizi oluştur
        } else {
            tumKisilerLocal = JSON.parse(localStorage.getItem('tumKisiler')); // varsa bu localdeki tum kisi dizisine girilen elemanı ekle

        }
        //this.tumKisiler= tumKisilerLocal;
        return tumKisilerLocal; // kontrollerden sonra localdeki diziyi bize göster
    }
    kisiEkle(kisi) {

        if (this.emailEssizMi(kisi.mail)) {
            this.tumKisiler.push(kisi); // tum kişiler dizisine yeni elemanı ekliyo
            localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler)); //locale geri yazdırıyo
            return true;
        } else {
            return false;
        }


    }
    kisiSil(mail) {
        this.tumKisiler.forEach((kisi, index) => {
            if (kisi.mail === mail) {
                this.tumKisiler.splice(index, 1);
            }
        });
        localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
    }

    //guncellenmisKisi yeni değerleri içerir
    //mail kişinin bulunması için gerekli olan eski mailini içerir
    
    kisiGuncelle(guncellenmisKisi, mail) {
        if(guncellenmisKisi.mail === mail){
            this.tumKisiler.forEach((kisi, index) => {
                if (kisi.mail === mail) {
                    this.tumKisiler[index] = guncellenmisKisi;
                    localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
                    return true;
                }
            });
            return true;

        }

        if(this.emailEssizMi(guncellenmisKisi.mail)){

            this.tumKisiler.forEach((kisi, index) => {
                if (kisi.mail === mail) {
                    this.tumKisiler[index] = guncellenmisKisi;
                    localStorage.setItem('tumKisiler', JSON.stringify(this.tumKisiler));
                    return true;
                }
            });
            return true;

        
        }else{
            return false;

        }



        

    }
}

document.addEventListener('DOMContentLoaded', function (e) {
    const ekran = new Ekran();
});