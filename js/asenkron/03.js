function getUser(id){
    console.log(`${id} idli kullanıcının bilgisi getiriliyor`);

    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve({ad: 'emre', id: id});
        },2000);
    });
}

function getCourses(userName){
    console.log(`${userName} isimli kullanıcının kursları getiriliyor`);
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            //reject('Kurslar getirlirken hata çıktı');
            resolve(['java, ', 'Js', 'flutter']);
        },2000);
    });
}

function getComments(kursAdi){
    console.log(`${kursAdi} isimli kurslar...`);
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve('kurs çok iyii');
        },2000);
    });
}


/* getUser(12345).then(user=>{ 
    getCourses(user.ad).then(kurslarDizisi=>{
       
       getComments(kurslarDizisi[0]).then(yorum =>{
            console.log(yorum);

       });
    });
}); */
// böyle iç içe yazmak yerine istediğimiz id'deki kullanıcının ismine ait yorumu getir -> daha kolayı aşaıda

/* getUser(123)
    .then(user=>getCourses(user.ad))
    .then(kurslarDizisi=> getComments(kurslarDizisi[0]))
    .then(yorum => console.log(yorum))
    .catch(hata=> console.log(hata));
 */


// ASYCN AWAIT

// bu yapıda catch kullanamıyoruz hata durumunu kontrol etmek için try catch içine almamız gerekiyor
yorumlariGoster();
async function yorumlariGoster(){
   try{
    const userObje = await getUser(456); // await hemen alt satırlara geçme işlemi biti objeyer at öyle geç demek
    const kurslarDizisi = await getCourses(userObje.ad);
    const yorum = await getComments(kurslarDizisi[0]);
    console.log(yorum);

   }catch(err){
        console.log('İMDAT!' + err);
   }
}