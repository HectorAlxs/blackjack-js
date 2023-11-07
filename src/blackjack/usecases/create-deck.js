import { shuffle } from 'underscore';

/**
 * Esta funcion crea un deck
 * @param {Array<String>} typesLetters ejemplo ['C','D','H','S']
 * @param {Array<String>} specialTypes ejemplo ['A','J','Q','K']
 * @returns {Array<String>} ejemplo ['2C', 'HA', '4D', 'SK', ...]
 */
export const createDeck = (typesLetters, specialTypes) => {
    if (!typesLetters || typesLetters.length === 0)
        throw new Error('No se envio el array de tipos de cartas o se envio vacio');
    if (!specialTypes || specialTypes.length === 0)
        throw new Error('No se envio el array de tipos especiales o se envio vacio');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let type of typesLetters) {
            deck.push(i + type);
        }
    }

    for (let type of typesLetters) {
        for (let special of specialTypes) {
            deck.push(special + type);
        }
    }
    deck = shuffle(deck);
    console.log(deck);
    return deck;
}

// export default createDeck;