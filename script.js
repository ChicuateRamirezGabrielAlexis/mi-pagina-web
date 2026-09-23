const botonPresentacion = document.querySelector('#boton-presentacion');
const tarjetaPresentacion = document.querySelector('#tarjeta-presentacion');
const tarjetas = document.querySelectorAll('.tarjeta');
const detalleMateria = document.querySelector('#detalle-materia');
const tituloMateria = detalleMateria?.querySelector('h3');
const queEs = detalleMateria?.querySelector('.que-es');
const paraQueSirve = detalleMateria?.querySelector('.para-que-sirve');
const queHace = detalleMateria?.querySelector('.que-hace');
const botonTema = document.querySelector('#boton-tema');

let temaGuardado = null;

try {
    temaGuardado = localStorage.getItem('tema');
} catch (error) {
    temaGuardado = null;
}

if (temaGuardado === 'oscuro') {
    document.body.classList.add('modo-oscuro');
}

if (botonTema) {
    const actualizarBotonTema = (modoOscuroActivo) => {
        botonTema.setAttribute(
            'aria-label',
            modoOscuroActivo ? 'Activar modo claro' : 'Activar modo oscuro'
        );
        botonTema.setAttribute('aria-pressed', String(modoOscuroActivo));
    };

    actualizarBotonTema(temaGuardado === 'oscuro');

    botonTema.addEventListener('click', () => {
        const modoOscuroActivo = document.body.classList.toggle('modo-oscuro');

        actualizarBotonTema(modoOscuroActivo);

        try {
            localStorage.setItem('tema', modoOscuroActivo ? 'oscuro' : 'claro');
        } catch (error) {
        }
    });
}

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