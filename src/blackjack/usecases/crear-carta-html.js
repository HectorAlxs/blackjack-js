/**
 * Esta funcion creara la carta en el html
 * @param {String} carta carta para obtener la imagen
 * @param {HTMLElement} contenedor elemento html que contendra la imagen
 * @return {HTMLImageElement} HTMLImageElement con la carta
 */
export const crearCarta = (carta, contenedor) => {
    if(!carta) throw new Error('No se paso la carta');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    return imgCarta;
}