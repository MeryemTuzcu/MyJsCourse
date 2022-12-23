//Hosting Örnekleri ve Function Decleration Expression kavramları

// Örenk 1

console.log(sayi3); //undef
k(); //merhaba
console.log(sayi3); // undef

var sayi3 = 1;
var sayi3 = 2;

console.log(sayi3); // 2




k(); //merb
function k(){
    console.log('naber');
}

k(); //merb


function k(){
    console.log('merhaba');
}
k(); // merb






// Örnek 2 

console.log(renk); //unde
var renk = 'mavi';
var rengiSoyle = function(){
    console.log('En sevdiğim renk:' + renk); //un

    var renk = 'yeşil';
    console.log('Şimdi en sevdiğim renk:' +renk); // yeşil
}

rengiSoyle(); //  un + yeşil







var sayi = 40;

function d(){
    e();
    console.log(sayi);
}

function e(){
    g();
    console.log(sayi);
}
d();
function g(){
    console.log(sayi);
}






var sayi2 = 10;

function a(){
    //sayi2 = 20;
    function b(){

        //sayi2 = 40;
        function c(){
            console.log(sayi2);
        }
        c();
    }
    b();
}
a();






function f(){
    var isim = 'emre'; 
    if(5>4){
        console.log(isim);
        var ad = 'yunus';
    }
    for (var i = 0; i< 3; i ++){
        
        console.log(isim);
        console.log(ad);
    }

    var ad = 'hasan';
    console.log(ad);
}
f();



