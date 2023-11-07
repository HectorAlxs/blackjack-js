import { requestLetter, getLetterValue, crearCarta } from './';

/**
 * 
 * @param {Number} puntosMinimos puntos necesarios para ganar
 * @param {HTMLElement} puntosHTML elemento html donde se mostraran los puntos
 * @param {HTMLElement} divCartasComputadora elemento html donde se mostran las cartas
 * @param {Array<String>} deck deck necesario para el turno
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if (!puntosMinimos)
        throw new Error('No se paso los puntos minimos');
    if (!puntosHTML)
        throw new Error('No se paso el elemento HTML para los puntos');
    if (!puntosHTML)
        throw new Error('No se paso el elemento HTML para las cartas');

    let puntosComputadora = 0;

    do {
        const carta = requestLetter(deck);

        puntosComputadora = puntosComputadora + getLetterValue(carta);
        puntosHTML.innerText = puntosComputadora;

        // <img class="carta" src="assets/cartas/2C.png"
        divCartasComputadora.append(crearCarta(carta));

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}

