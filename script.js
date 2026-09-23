const botonPresentacion = document.querySelector('#boton-presentacion');
const tarjetaPresentacion = document.querySelector('#tarjeta-presentacion');
const tarjetas = document.querySelectorAll('.tarjeta');
const detalleMateria = document.querySelector('#detalle-materia');
const tituloMateria = detalleMateria?.querySelector('h3');
const queEs = detalleMateria?.querySelector('.que-es');
const paraQueSirve = detalleMateria?.querySelector('.para-que-sirve');
const queHace = detalleMateria?.querySelector('.que-hace');
const botonTema = document.querySelector('#boton-tema');

const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'oscuro' && botonTema) {
    document.body.classList.add('modo-oscuro');
    botonTema.setAttribute('aria-label', 'Activar modo claro');
    botonTema.setAttribute('aria-pressed', 'true');
}

botonTema?.addEventListener('click', () => {
    const modoOscuroActivo = document.body.classList.toggle('modo-oscuro');

    botonTema.setAttribute(
        'aria-label',
        modoOscuroActivo ? 'Activar modo claro' : 'Activar modo oscuro'
    );
    botonTema.setAttribute('aria-pressed', String(modoOscuroActivo));
    localStorage.setItem('tema', modoOscuroActivo ? 'oscuro' : 'claro');
});

botonPresentacion?.addEventListener('click', () => {
    const estaOculta = tarjetaPresentacion.hidden;

    tarjetaPresentacion.hidden = !estaOculta;
    botonPresentacion.setAttribute('aria-expanded', String(estaOculta));
});

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
        tituloMateria.textContent = tarjeta.querySelector('.tarjeta-titulo').textContent;
        queEs.textContent = tarjeta.dataset.queEs;
        paraQueSirve.textContent = tarjeta.dataset.paraQueSirve;
        queHace.textContent = tarjeta.dataset.queHace;
        detalleMateria.hidden = false;
    });
});