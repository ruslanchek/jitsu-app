const { readdirSync, readFileSync, writeFileSync } = require('fs');

const LOCALES_PATH = './src/locales';
const ENUM_NAME = 'EPhrase';
const PHRASE_SEPARATOR = '::';
const ENUM_PHRASE_SEPARATOR = '_';

const format = string => {
  return string
    .split(PHRASE_SEPARATOR)
    .map(part => {
      return `${part.charAt(0).toUpperCase()}${part.substring(1).toLowerCase()}`;
    })
    .join(ENUM_PHRASE_SEPARATOR);
};

readdirSync(LOCALES_PATH)
  .filter(fileName => {
    return new RegExp(/\.json$/).test(fileName);
  })
  .forEach(fileName => {
    const path = `${LOCALES_PATH}/${fileName}`;
    const contentsBuffer = readFileSync(path);

    try {
      const contentsJson = JSON.parse(contentsBuffer.toString('utf8'));
      let enumResult = `export enum ${ENUM_NAME} {\n`;
      let phrasesCount = 0;

      for (const key in contentsJson) {
        enumResult += `\t${format(key)} = '${key}',\n`;
        phrasesCount++;
      }

      enumResult += `}\n`;

      writeFileSync(`${LOCALES_PATH}/${ENUM_NAME}.ts`, enumResult);

      console.log(`// Enumeration done for ${phrasesCount} ${phrasesCount === 1 ? 'phrase' : 'phrases'}`);
    } catch (e) {
      console.error(e);
    }
  });
