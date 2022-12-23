const sayiDizisi = [1,2,3,4,5];

const yeniMap = sayiDizisi.map(function(sayi){
    return sayi * 2;
});

const yeniWithReduce = sayiDizisi.reduce(function(oncekiHali, oankiSayi){
    oncekiHali.push(oankiSayi*5);
    return oncekiHali;
}, []);
console.log(yeniMap);
console.log(yeniWithReduce);



//reduce ile filter uygulaması


// filter hali
const withFilter = sayiDizisi.filter(function(sayi, index){
    return sayi <3;
});



const filtreWithReduce = sayiDizisi.reduce(function(pre, sayi, index){ // BURAYI TEKRAR İZLE
    console.log(pre,sayi, index);
    if(sayi< 3);{ 
        pre.push(sayi);

    }
    return pre;
},[]);

console.log(filtreWithReduce);


const elemaniBulReduce = sayiDizisi.reduce(function(pre, sayi, index){
    //console.log(pre, sayi, index);
    if(sayi == 2){
        return sayi;
    }else{
        return pre;
    }
},undefined);

console.log(elemaniBulReduce);


//ZOR BİR SORU: parantezleri dengele.

function parantezlerDengeliMi(metin){
    const dizi = metin.split('');

    const sonuc = dizi.reduce(function(pre, karakter){
        if(pre < 0){
            return previous;
        }
        
        if(karakter === '('){

            return ++previous;
        }
        if(karakter === ')'){
            return --previous;
        }

        return pre;
    }, 0);

    if(!sonuc){
        console.log(metin + 'Dengelidir');

    }else {
        console.log(metim + ' Dengeli Değil');
    }
}

parantezlerDengeliMi('()');