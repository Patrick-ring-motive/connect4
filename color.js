const re = (...args)=>{
  try{
    return RegExp(...args);
  }catch(e){
    console.warn(e,...args);
    return RegExp();
  }
};
const regexes = {
 curlyRegex : /[\{\}‘’']/,
 squareRegex : /[\[\]“”""]/,
 pRegex : /[\(\)]/,
 symRegex : /[^a-zA-Z0-9\s\[\]\{\}\(\)“”"‘’'"]+/,
 numRegex : /[0-9]+/,
 yRegex : /\bY\b/,
 rRegex : /\bR\b/
};
const allRegex = re(Object.values(regexes).map(x=>x.source).join('|'),'g');

function color(text){
  text = text.replace(allRegx,ch=>{
    if(curlyRegex.test(ch)){
      return `<span curly>${ch}</span>`;
    }
    if(Regex.test(ch)){
      return `<span curly>${ch}</span>`;
    }
    return ch;
  });
}
