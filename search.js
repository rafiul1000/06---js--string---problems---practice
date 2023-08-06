const lyrics = 'Tomi bondhu kala pakhi ami jeno ki. Boshonto kale tomay bolte parini. Sada sada kala Vab jomeche sada kala'

const doesExist2 = lyrics.toLowerCase().includes('vab')
// console.log(doesExist2);

// ==========================================================================

// indexOf

// console.log(lyrics.indexOf('Vab'));


if(lyrics.indexOf('vab') !== -1) {
    console.log('exists inside the string');
}
else{
    console.log('can not find it');
}


// startsWith

console.log(lyrics.startsWith('Tomi'))
console.log(lyrics.startsWith('2mi'))


// endWith

const fileName = 'My biodata.pdf';
const imageName = 'My image.png'

console.log(fileName.endsWith('.pdf'))
console.log(imageName.endsWith('.pdf'))
console.log(imageName.endsWith('.png'))
