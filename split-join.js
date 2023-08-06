const lyrics = 'Tomi bondhu kala pakhi. ami jeno ki. Boshonto kale tomay. bolte parini. Sada sada  kala.'

// split by word using (space)

// const parts = lyrics.split(' ');
// console.log(parts);


// split by sentence or line using (.)
const sentences = lyrics.split('.')
// console.log(sentences);

// split by character using ('') empty

const character = lyrics.split('');
// console.log(character);

// slice(katakati) [১ম মান যা থাকবে ঐ জায়গা থেকে কাটা শুরু করবো আর ২য় মান যা থাকবে ঐ জায়গার আগে পর্যন্ত কাটবে।]

const katakati = 'amar sonar bangla';
console.log(katakati)
const kataKati = katakati.slice(5, 10);

// console.log(kataKati)   // output is:  sonar

// substring (slice এবং substring একই )

console.log(katakati)
const abc = katakati.substring(5, 10);
// console.log(abc)

// join a line or some lines: using (join)

const song2 = [
    'Tomi bondhu kala pakhi',
    'Ami jeno ki',
    'Boshonto kale tomay',
    'Bolte parini'
  ];

  const song3 = song2.join('. ');
  console.log(song3)