localStorage.removeItem('nombre');


//update register

const mesesArray = JSON.parse(localStorage.getItem('meses') );
console.log( mesesArray )
mesesArray.push('new month');
console.log( mesesArray );
localStorage.setItem('meses', JSON.stringify( mesesArray ));


localStorage.clear();