/* document.querySelector('.parent').addEventListener('click', e=>{ //konsolda 4 tane h3 değerden sadece itemm demiyor parent-child-item şeklinde yazdırıyor
    console.log('parent');
});

document.querySelector('.child').addEventListener('click', e=>{ // birinci h3 den sonra tıklanılan hiçbirinde item çalışmıyor parent-child gösteriyor
    console.log('child');
});

document.querySelector('.item').addEventListener('click', e=>{ // bunun mantığı üste doğru göstermesi ama altına doğru göstermemesi
    console.log('itemmmmm');
}); */

document.querySelector('.parent').addEventListener('click', (e)=>{
    
    if(e.target.classList.contains('item')){
        console.log('merhaba tıklandı'); // merhabaların hepsine ulaştık
    }
    //console.log('tıklandı'); dive tıklayınca çalışıyo
});