// commonjs==> browserify asenktron olmadığı için çağrıldığı zaman bir sürüconst oluşturmalıyız ki sırayla çalıoştırsın bu da gereksiz kod yazımı 
//amd ==> requirejs yazımı kötü kalabalık bir görüntü


import /*varsayilan ,*/{sayilariBol as carp, sayilariTopla} from './utils.js';

carp(5,6);
sayilariTopla(1,2);

//import varsayilan from './utils.js'; tek satırda defaultuda çağırabilmek için yukarıdaki gibi yapabiliriz 
//varsayilan('Berfin');

import Ogrenci,{test, PI} from './utils.js';
const ogr = new Ogrenci('mery', 5);
console.log(ogr);

test();// fonksiyon olduğu için direkt çağırabildim

console.log(PI); // değişken olduğu için direkt çağırabildim