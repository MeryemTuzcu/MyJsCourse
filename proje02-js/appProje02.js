const ad = document.getElementById('ad');
const soyad = document.getElementById('soyad');
const mail = document.getElementById('mail');
const form = document.getElementById('form-rehber');
const kisiListesi = document.querySelector('.kisi-listesi');
//event listenerların tanımlanması
form.addEventListener('submit', kaydet);
kisiListesi.addEventListener('click', kisiIslemleriniYap);



// tüm kişiler için dizi
const tumKisilerDizisi = [];
let secilenSatir = undefined;


function kisiIslemleriniYap(event) {

    if (event.target.classList.contains('btn--delete')) {
        const silinecekTR = event.target.parentElement.parentElement;
        const silinecekMail = event.target.parentElement.previousElementSibling.textContent;
        rehberdenSil(silinecekTR, silinecekMail);
    } else if (event.target.classList.contains('btn--edit')) {
        //console.log('neredeyis')
        document.querySelector('.kaydet-Guncelle').value = 'Güncelle';
        const secilenTR = event.target.parentElement.parentElement;
        const guncellenecekMail = secilenTR.cells[2].textContent;

        
        ad.value = secilenTR.cells[0].textContent;
        soyad.value = secilenTR.cells[1].textContent;
        mail.value = secilenTR.cells[2].textContent;

        secilenSatir = secilenTR;
    }


}
function kisiyiGuncelle(kisi) {
    //* kisi parametresinde secilen kisinin yeni değerleri vardır.
    //*seçilen satırda da eski değerler var
    for (let i = 0; i < tumKisilerDizisi.length; i++) {
        if (tumKisilerDizisi[i].mail === secilenSatir.cells[2].textContent) {
            tumKisilerDizisi[i] = kisi;
            break;
        }
    }
    //burası çalışmıyo
    secilenSatir.cells[0].textContent = kisi.ad;
    secilenSatir.cells[1].textContent = kisi.soyad;
    secilenSatir.cells[2].textContent = kisi.mail;

    document.querySelector('.kaydet-Guncelle').value = 'Kaydet';
    secilenSatir = undefined;

}

function rehberdenSil(silinecekTrElement, silinecekMail) {
    silinecekTrElement.remove();
    console.log(silinecekTrElement, silinecekMail);

    //maile göre silme işlemi
    /*   tumKisilerDizisi.forEach((kisi,index)=>{
          if(kisi.mail ===silinecekMail){
              tumKisilerDizisi.splice(index, 1);
          }
      }); */
    //filter ile sil
    const silinmeyecekKisiler = tumKisilerDizisi.filter(function (kisi, index) {
        return kisi.mail !== silinecekMail;
    });

    tumKisilerDizisi.length = 0;
    tumKisilerDizisi.push(...silinmeyecekKisiler);

    alanlariTemizle();
    document.querySelector('.kaydet-Guncelle').value ='Kaydet';

}

function kaydet(e) { 
    e.preventDefault();

    const eklenecekVeyaGuncellenecekKisi = {
        ad: ad.value,
        soyad: soyad.value,
        mail: mail.value
    }

    const sonuc = verileriKontrolEt(eklenecekVeyaGuncellenecekKisi);
    if (sonuc.durum) {
        if (secilenSatir) {
            //guncelleme yap
            kisiyiGuncelle(eklenecekVeyaGuncellenecekKisi);
            
        } else {
            kisiyiEkle(eklenecekVeyaGuncellenecekKisi);
        }

    } else {
        bilgiOlustur(sonuc.mesaj, sonuc.durum);
    }
    //console.log(eklenecekKisi);

}



function verileriKontrolEt(kisi) {
    //objelerde in kullanımı
    for (const deger in kisi) {

        if (kisi[deger]) {
            //console.log(kisi[deger]);
        } else {
            const sonuc = {
                durum: false,
                mesaj: 'Boş alan bırakmayınız'
            }
            return sonuc;
        }
    }
    alanlariTemizle();
    return {
        durum: true,
        mesaj: 'Kaydedildi'
    }
}

function bilgiOlustur(mesaj, durum) {
    const olusturulanBilgi = document.createElement('div');
    olusturulanBilgi.textContent = mesaj;
    olusturulanBilgi.className = 'bilgi';

    olusturulanBilgi.classList.add(durum ? 'bilgi--success' : 'bilgi--error');
    document.querySelector('.container').insertBefore(olusturulanBilgi, form);

    //setTimeout, setInterval verdiğimiz süre geçince çalıştır- verdiğimiz süre kadar çalışsın
    setTimeout(function () {
        const silinecekDiv = document.querySelector('.bilgi');
        if (silinecekDiv) {
            silinecekDiv.remove();
        }
    }, 2000);
}

function alanlariTemizle() {
    ad.value = '';
    soyad.value = '';
    mail.value = '';

}

function kisiyiEkle(eklenecekVeyaGuncellenecekKisi) {
    const olusturulanTrElementi = document.createElement('tr');
    olusturulanTrElementi.innerHTML = `<td>${eklenecekVeyaGuncellenecekKisi.ad}</td>
    <td>${eklenecekVeyaGuncellenecekKisi.soyad}</td>
    <td>${eklenecekVeyaGuncellenecekKisi.mail}</td>
    <td>
        <button class="btn btn--edit"><i class="fa fa-edit" aria-hidden="true"></i> </button>
        <button class="btn btn--delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
    </td>`;

    kisiListesi.appendChild(olusturulanTrElementi);
    tumKisilerDizisi.push(eklenecekVeyaGuncellenecekKisi);

    bilgiOlustur('Kişi rehbere kaydedildi', true);

}