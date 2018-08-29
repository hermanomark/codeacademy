let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
// console.log(storyWords.length);

let betterWords = [];
storyWords.filter(word => unnecessaryWords.includes(word) ? null : betterWords.push(word));
// console.log(betterWords);

let totalNumberOverusedWords = 0;
betterWords.map(word => {
  if (word === overusedWords[0]) {
    totalNumberOverusedWords += 1;
  }
  else if (word === overusedWords[1]) {
    totalNumberOverusedWords += 1;
  }
  else if (word === overusedWords[2]) {
    totalNumberOverusedWords += 1;
  }
})
// console.log(`Total number of overused words: ${totalNumberOverusedWords}`);

let totalNumberSentence = 0;
story.split('').map(letter => letter === '.' || letter === '!' ? totalNumberSentence += 1 : null );
// console.log(`Total number of Sentence: ${totalNumberSentence}`);

let totalNumberWord = 0;
storyWords.map(word => totalNumberWord += 1)
// console.log(`Total number of word: ${totalNumberWord}`);

const logAll = () => {
  console.log(`Total number of word: ${totalNumberWord}`);
  console.log(`Total number of overused words: ${totalNumberOverusedWords}`);
  console.log(`Total number of Sentence: ${totalNumberSentence} `);
  console.log(betterWords.join(' '));
}

logAll();

// https://www.youtube.com/watch?v=0HtVAEgCvrE