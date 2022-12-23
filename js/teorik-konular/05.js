//closure

/*  const ikiyleCarp = sayi => sayi * 2;

 const s1 = ikiyleCarp(5);
 const s2 = ikiyleCarp(9);

 console.log(s1, s2); */


 const dis =() =>{ // bu fonksiyon bitse dahi
    let sayac = 0;

    const arttir = () =>{ // arttir fonksiyonuna eişebildiğimiz için arttir bir closure'dır
        sayac++;
        console.log(sayac);
    }
    return arttir; // arttir fonksiyonuna erişmiş oluyoruz
 }

const sonuc = dis();
const s2 =  sonuc(); //arttır fonksiyonu kendi lexical scope alanının dıo-şında olsa dahi  çağırıp erişebiliyoruz


 
