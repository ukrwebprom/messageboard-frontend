import msg from './messages.json';
export const getMessage = (alias, lang) => {
    return msg[lang][alias]
}