(() => {
  const re = (...args) => {
    try {
      return RegExp(...args);
    } catch (e) {
      console.warn(e, ...args);
      return RegExp();
    }
  };
  const regexes = {
    star:[/(\bx\b)|\*+/,'cornflowerblue'],
    curly: [/[\{\}‘’']/, '#ff79c6'],
    square: [/[\[\]“”""]/, '#ba7dff'],
    paren: [/[\(\)]/, 'orange'],
    symbol: [/[^a-zA-Z0-9\s\[\]\{\}\(\)“”"‘’'"\*]+/, '#00ff00'],
    number: [/[0-9]+/, 'deepskyblue'],
    yellow: [/\b(Y|Yellow)\b/, 'yellow'],
    red: [/\b(R|Red)\b/, 'red']
  };
  const allRegex = re(Object.values(regexes).map(x => x[0].source).join('|'), 'ig');
  const textShadow = 'black';
  const shadowSize ='0.1ch';
  let bold = false;
  globalThis.color =  (text) => 
    text.replace(allRegex,ch => {
      for (const key in regexes) {
        if (regexes[key][0].test(ch)) {
          return `<span class="color-${key}">${ch.replace(/[<>]/g,'^')}</span>`;
        }
      }
      return ch;
    });
  const style = document.createElement('style');
  for (const key in regexes) {
    style.textContent += ` .color-${key} { color: ${regexes[key][1]} !important; text-shadow: -${shadowSize} -${shadowSize} 0 ${textShadow}, ${shadowSize} -${shadowSize} 0 ${textShadow}, -${shadowSize} ${shadowSize} 0 ${textShadow}, ${shadowSize} ${shadowSize} 0 ${textShadow} !important; } `;
  }
  document.firstElementChild.appendChild(style);
})();
