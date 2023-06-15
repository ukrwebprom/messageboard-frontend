import words from '../words.json';

export const getRandomName = () => {
    return `${words.noun[getNum(words.noun.length)]} ${words.adjective[getNum(words.adjective.length)]}`
}

function getNum(n) {
    return Math.floor(Math.random() * (n + 1));
  }