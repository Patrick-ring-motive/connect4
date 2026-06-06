const re = (...args)=>{
  try{
    return RegExp(...args);
  }catch(e){
    console.warn(e,...args);
    return RegExp();
  }
};
const regexes = {
 curly : /[\{\}‘’']/,
 square : /[\[\]“”""]/,
 paren : /[\(\)]/,
 symbol : /[^a-zA-Z0-9\s\[\]\{\}\(\)“”"‘’'"]+/,
 number : /[0-9]+/,
 yellow : /\bY\b/,
 red : /\bR\b/
};
const allRegex = re(Object.values(regexes).map(x=>x.source).join('|'),'g');

function color(text){
  return text.replace(allRegx,ch=>{
    for(const key in regexes){
      if(regexes[key].test(ch)){
         return `<span class="color-${key}">${ch}</span>`;
      }
    }
    return ch;
  });
}
