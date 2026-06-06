const re = (...args)=>{
  try{
    return RegExp(...args);
  }catch(e){
    console.warn(e,...args);
    return RegExp();
  }
};
const curlyRegex = /[\{\}‘’']/;
const squareRegex = /[\[\]“”""]/;
const pRegex = /[\(\)]/;
const symRegex = /[^a-zA-Z0-9\s\[\]\{\}\(\)“”"‘’'"]+/g;
const numRegex = /[0-9]+/;
const yRegex = /\bY\b/;
const rRegex = /\bR\b/;
const allRegex = re([
  curlyRegex,
  squareRegex,
  pRegex,
  symRegex,
  numRegex,
  yRegex,
  rRegex
].map(x=>x.source).join('|'),'g');

function color(text){
  text = text.replace(allRegx,ch=>{
    if(curlyRegex.test(ch)){
      return `<span curly>${ch}</span>`;
    }
    return ch;
  });
}
