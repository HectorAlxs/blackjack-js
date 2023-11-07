
/**
 * Esta funcion toma una carta un deck
 * @param {Array<String>} deck ejemplo ['2C', 'HA', '4D', 'SK', ...];
 * @returns {String} ejemplo '6C'
 */
export const requestLetter = (deck) => {
    if ( deck.length === 0 ) 
        throw 'No hay cartas en el deck';
    const carta = deck.pop();
    return carta;
}

