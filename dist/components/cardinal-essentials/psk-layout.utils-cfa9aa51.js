import './psk-style.utils-d03eab88.js';

function generateRule(selector, properties) {
  let styles = `${selector} {\n`;
  for (const property in properties) {
    styles += `\t${property}: ${properties[property]};\n`;
  }
  styles += '}';
  return styles;
}

export { generateRule as g };
