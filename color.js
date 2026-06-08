(() => {
  const rm = (x, y) => String(x).replaceAll(y, '');
  const re = (...args) => {
    try {
      return RegExp(...args);
    } catch (e) {
      console.warn(e, ...args);
      return RegExp();
    }
  };
  const regexes = {
    star: [/\*+/, 'cornflowerblue'],
    curly: [/[\{\}‘’']+/, '#ff79c6'],
    square: [/[\[\]“”""]+/, '#ba7dff'],
    paren: [/[\(\)]+/, 'orange'],
    number: [/[0-9]+/, 'deepskyblue'],
  };
  const compoundRe = {
    yellow: [/\b(Y|Yellow)\b/, 'yellow'],
    red: [/\b(R|Red)\b/, 'red'],
    x: [/(\bx\b)/, '#ffffff'],
    symbol: [re(`[^a-zA-Z0-9\s${Object.values(regexes).map(x => x[0].source.slice(1,-2)).join('')}]+`), '#00ff00'],
    ...regexes
  };
  const allRegex = re(Object.values(compoundRe).map(x => x[0].source).join('|'), 'ig');
  const ts = 'black';
  const sz = '0.1ch';
  globalThis.color = (text) =>
    text.replace(allRegex, ch => {
      for (const key in compoundRe) {
        if (compoundRe[key][0].test(ch)) {
          return `<span class="color-${key}">${rm(ch,/[<>]/g)}</span>`;
        }
      }
      return ch;
    });
  const style = document.createElement('style');
  style.textContent = Object.keys(compoundRe).map(key =>
    `.color-${key} ${
      rm(JSON.stringify({
        color: `${compoundRe[key][1]} !important`,
        "text-shadow": `-${sz} -${sz} 0 ${sz}, ${sz} -${sz} 0 ${ts}, -${sz} ${sz} 0 ${ts}, ${sz} ${sz} 0 ${ts} !important`,
      },null,2),'"').replace(/!important,?/g,'!important;')
    }`).join(' ');
  document.firstElementChild.appendChild(style);
})();
