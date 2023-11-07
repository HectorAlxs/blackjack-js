/**
 * Esta funcion toma el valor de una carta
 * @param {String} carta ejemplo 10C 
 * @returns {Number} ejemplo 10
 */
export const getLetterValue = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}